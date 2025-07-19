"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { hasMktCrudAccess } from "@/lib/rbac";
import { Undo2, Trash2, Edit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Campaign {
    id: number;
    title: string;
    description: string | null;
    kpi: string | null;
    startDate: string;
    endDate: string;
    status: 'ACTIVE' | 'INACTIVE' | 'COMPLETED';
}

export default function CampaignsPage() {
    const router = useRouter();
    const { data: session } = useSession();

    // Permission checks
    const canCreate = session?.user?.role ? hasMktCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasMktCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasMktCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasMktCrudAccess(session.user.role, "DELETE") : false;

    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // Form states
    const [campaignTitle, setCampaignTitle] = useState("");
    const [campaignDesc, setCampaignDesc] = useState("");
    const [campaignKpi, setCampaignKpi] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
        loadCampaigns();
    }, []);

    const loadCampaigns = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/campaigns');
            if (response.ok) {
                const data = await response.json();
                setCampaigns(data);
            }
        } catch (error) {
            console.error('Error loading campaigns:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCampaignClick = (campaign: Campaign) => {
        setSelectedCampaign(campaign);
        setIsViewDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedCampaign) {
            setCampaignTitle(selectedCampaign.title);
            setCampaignDesc(selectedCampaign.description || "");
            setCampaignKpi(selectedCampaign.kpi || "");
            setStartDate(selectedCampaign.startDate);
            setEndDate(selectedCampaign.endDate);
            setIsViewDialogOpen(false);
            setIsEditDialogOpen(true);
        }
    };

    const handleEditSubmit = async () => {
        if (selectedCampaign) {
            try {
                const response = await fetch(`/api/campaigns`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: selectedCampaign.id,
                        title: campaignTitle,
                        description: campaignDesc,
                        kpi: campaignKpi,
                        startDate,
                        endDate,
                        status: selectedCampaign.status
                    }),
                });

                if (response.ok) {
                    const updatedCampaign = await response.json();
                    setCampaigns(campaigns.map(campaign => 
                        campaign.id === selectedCampaign.id ? updatedCampaign : campaign
                    ));
                    setIsEditDialogOpen(false);
                    resetForm();
                } else {
                    alert('Failed to update campaign');
                }
            } catch (error) {
                console.error('Error updating campaign:', error);
                alert('Failed to update campaign');
            }
        }
    };

    const handleDeleteConfirm = async () => {
        if (selectedCampaign) {
            try {
                const response = await fetch(`/api/campaigns`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: selectedCampaign.id }),
                });

                if (response.ok) {
                    setCampaigns(campaigns.filter(campaign => campaign.id !== selectedCampaign.id));
                    setIsDeleteDialogOpen(false);
                    setIsViewDialogOpen(false);
                    setSelectedCampaign(null);
                } else {
                    alert('Failed to delete campaign');
                }
            } catch (error) {
                console.error('Error deleting campaign:', error);
                alert('Failed to delete campaign');
            }
        }
    };

    const resetForm = () => {
        setCampaignTitle("");
        setCampaignDesc("");
        setCampaignKpi("");
        setStartDate("");
        setEndDate("");
        setSelectedCampaign(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
                        {/* Left: Back Button - Fixed Width */}
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-32 justify-start" onClick={() => router.push("/mkt")}>
                            <Undo2 className="w-4 h-4 transition-all" />
                            <span className="hidden sm:inline transition-all">Back</span>
                        </div>
                        
                        {/* Center: Title - Takes remaining space and centers content */}
                        <div className="flex-1 flex justify-center">
                            <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight text-center">
                                Ziyy Gym
                            </h2>
                        </div>
                        
                        {/* Right: Breadcrumb - Fixed Width to match left side */}
                        <div className="w-32 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/mkt" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                            Marketing
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Campaign</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-8">
                        {loading ? (
                            <div className="col-span-full flex justify-center items-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            </div>
                        ) : (
                            campaigns.map((campaign) => (
                                <Card 
                                    key={campaign.id} 
                                    className="cursor-pointer hover:shadow-lg transition-shadow bg-white/80"
                                    onClick={() => handleCampaignClick(campaign)}
                                >
                                    <CardHeader>
                                        <CardTitle>{campaign.title}</CardTitle>
                                        <CardDescription>{campaign.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <p><span className="font-semibold">KPI:</span> {campaign.kpi}</p>
                                            <p><span className="font-semibold">Mulai:</span> {campaign.startDate.split("T")[0]}</p>
                                            <p><span className="font-semibold">Sampai:</span> {campaign.endDate.split("T")[0]}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>

                    {/* View Dialog */}
                    <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Campaign Details</DialogTitle>
                                <DialogDescription>Informasi detail mengenai campaign.</DialogDescription>
                            </DialogHeader>
                            {selectedCampaign && (
                                <div className="grid grid-cols-2 gap-4 py-4">
                                    <div>
                                        <Label>Judul</Label>
                                        <p className="mt-1">{selectedCampaign.title}</p>
                                    </div>
                                    <div>
                                        <Label>Keterangan</Label>
                                        <p className="mt-1">{selectedCampaign.description}</p>
                                    </div>
                                    <div>
                                        <Label>KPI</Label>
                                        <p className="mt-1">{selectedCampaign.kpi}</p>
                                    </div>
                                    <div>
                                        <Label>Dari</Label>
                                        <p className="mt-1">{selectedCampaign.startDate.split("T")[0]}</p>
                                    </div>
                                    <div>
                                        <Label>Sampai</Label>
                                        <p className="mt-1">{selectedCampaign.endDate.split("T")[0]}</p>
                                    </div>
                                </div>
                            )}
                            <DialogFooter>
                                {canUpdate && (
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2 hover:cursor-pointer"
                                    onClick={handleEditClick}
                                >
                                    <Edit className="h-4 w-4" />
                                    Edit
                                </Button>
                                )}
                                {canDelete && (
                                <Button
                                    variant="destructive"
                                    className="flex items-center gap-2 hover:cursor-pointer"
                                    onClick={() => setIsDeleteDialogOpen(true)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                </Button>
                                )}
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Edit Dialog */}
                    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Campaign</DialogTitle>
                                <DialogDescription>Edit informasi mengenai campaign.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Campaign Title</Label>
                                    <Input
                                        id="title"
                                        value={campaignTitle}
                                        onChange={(e) => setCampaignTitle(e.target.value)}
                                        placeholder="Campaign Title"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Input
                                        id="description"
                                        value={campaignDesc}
                                        onChange={(e) => setCampaignDesc(e.target.value)}
                                        placeholder="Campaign Description"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="kpi">KPI</Label>
                                    <Input
                                        id="kpi"
                                        value={campaignKpi}
                                        onChange={(e) => setCampaignKpi(e.target.value)}
                                        placeholder="Target KPI"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="startDate">Start Date</Label>
                                        <Input
                                            id="startDate"
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="endDate">End Date</Label>
                                        <Input
                                            id="endDate"
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button 
                                    type="submit" 
                                    onClick={handleEditSubmit}
                                    disabled={!campaignTitle || !campaignDesc || !campaignKpi || !startDate || !endDate}
                                    className="hover:cursor-pointer"
                                >
                                    Save
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Delete Confirmation Dialog */}
                    <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Delete Campaign</DialogTitle>
                                <DialogDescription>
                                    Are you sure you want to delete this campaign? This action cannot be undone.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button
                                    variant="destructive"
                                    className="flex items-center gap-2 hover:cursor-pointer"
                                    onClick={handleDeleteConfirm}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}
