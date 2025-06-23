"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Campaign {
    id: string;
    title: string;
    description: string;
    kpi: string;
    startDate: string;
    endDate: string;
}

export default function ActiveCampaignsPage() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    // Form states
    const [campaignTitle, setCampaignTitle] = useState("");
    const [campaignDesc, setCampaignDesc] = useState("");
    const [campaignKpi, setCampaignKpi] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        // Load campaigns
        const loadData = async () => {
            const campaignsRes = await fetch('/campaigns.json');
            const campaignsData = await campaignsRes.json();
            const today = new Date().toISOString().split('T')[0];
            
            // Filter active campaigns
            const activeCampaigns = campaignsData.campaigns.filter((campaign: Campaign) =>
                campaign.startDate <= today && campaign.endDate >= today
            );
            
            setCampaigns(activeCampaigns);
        };
        loadData();
    }, []);

    const handleCampaignClick = (campaign: Campaign) => {
        setSelectedCampaign(campaign);
        setIsViewDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedCampaign) {
            setCampaignTitle(selectedCampaign.title);
            setCampaignDesc(selectedCampaign.description);
            setCampaignKpi(selectedCampaign.kpi);
            setStartDate(selectedCampaign.startDate);
            setEndDate(selectedCampaign.endDate);
            setIsViewDialogOpen(false);
            setIsEditDialogOpen(true);
        }
    };

    const handleEditSubmit = () => {
        if (selectedCampaign) {
            const updatedCampaign = {
                ...selectedCampaign,
                title: campaignTitle,
                description: campaignDesc,
                kpi: campaignKpi,
                startDate,
                endDate,
            };

            setCampaigns(campaigns.map(campaign => 
                campaign.id === selectedCampaign.id ? updatedCampaign : campaign
            ));

            setIsEditDialogOpen(false);
            resetForm();
        }
    };

    const handleDeleteClick = () => {
        setIsViewDialogOpen(false);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedCampaign) {
            setCampaigns(campaigns.filter(campaign => campaign.id !== selectedCampaign.id));
            setIsDeleteDialogOpen(false);
            setSelectedCampaign(null);
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

    const getDaysRemaining = (endDate: string) => {
        const end = new Date(endDate);
        const today = new Date();
        const diffTime = end.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans" style={{ background: '#629dc9' }}>
            <div className="w-full max-w-6xl">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <h2 className="text-white text-2xl tracking-tight">Ziyy Gym | Active Campaigns</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/mkt" className="text-white/90 hover:text-white">
                                        Marketing
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>Active Campaigns</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {campaigns.map((campaign) => (
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
                                        <p><span className="font-semibold">Days Remaining:</span> {getDaysRemaining(campaign.endDate)}</p>
                                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                                            <div 
                                                className="h-2 bg-blue-500 rounded-full"
                                                style={{ 
                                                    width: `${Math.min(100, 100 * (getDaysRemaining(campaign.endDate) / 30))}%`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* View Dialog */}
                    <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Campaign Details</DialogTitle>
                            </DialogHeader>
                            {selectedCampaign && (
                                <div className="grid gap-4 py-4">
                                    <div>
                                        <Label>Title</Label>
                                        <p className="mt-1">{selectedCampaign.title}</p>
                                    </div>
                                    <div>
                                        <Label>Description</Label>
                                        <p className="mt-1">{selectedCampaign.description}</p>
                                    </div>
                                    <div>
                                        <Label>KPI</Label>
                                        <p className="mt-1">{selectedCampaign.kpi}</p>
                                    </div>
                                    <div>
                                        <Label>Start Date</Label>
                                        <p className="mt-1">{selectedCampaign.startDate}</p>
                                    </div>
                                    <div>
                                        <Label>End Date</Label>
                                        <p className="mt-1">{selectedCampaign.endDate}</p>
                                    </div>
                                    <div>
                                        <Label>Days Remaining</Label>
                                        <p className="mt-1">{getDaysRemaining(selectedCampaign.endDate)} days</p>
                                    </div>
                                </div>
                            )}
                            <DialogFooter>
                                <Button variant="outline" onClick={handleDeleteClick}>Delete</Button>
                                <Button onClick={handleEditClick}>Edit</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Edit Dialog */}
                    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Campaign</DialogTitle>
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
                                >
                                    Save Changes
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
                                <Button variant="destructive" onClick={handleDeleteConfirm}>
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
