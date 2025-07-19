"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { hasMktCrudAccess } from "@/lib/rbac";
import { Undo2, Trash2, Edit } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Activity {
    id: number;
    username: string;
    campaignId: number;
    title: string;
    description: string;
    date: string;
    campaign?: {
        id: number;
        title: string;
    };
}

interface Campaign {
    id: number;
    title: string;
}

export default function ActivitiesPage() {
    const router = useRouter();
    const { data: session } = useSession();

    // Permission checks
    const canCreate = session?.user?.role ? hasMktCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasMktCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasMktCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasMktCrudAccess(session.user.role, "DELETE") : false;

    const [activities, setActivities] = useState<Activity[]>([]);
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // Form states
    const [username, setUsername] = useState("");
    const [selectedCampaign, setSelectedCampaign] = useState("");
    const [activityTitle, setActivityTitle] = useState("");
    const [activityDesc, setActivityDesc] = useState("");

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            
            // Load activities
            const activitiesResponse = await fetch('/api/activities');
            if (activitiesResponse.ok) {
                const activitiesData = await activitiesResponse.json();
                setActivities(activitiesData);
            }

            // Load campaigns
            const campaignsResponse = await fetch('/api/campaigns');
            if (campaignsResponse.ok) {
                const campaignsData = await campaignsResponse.json();
                setCampaigns(campaignsData);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleActivityClick = (activity: Activity) => {
        setSelectedActivity(activity);
        setIsViewDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedActivity) {
            setUsername(selectedActivity.username);
            setSelectedCampaign(selectedActivity.campaignId.toString());
            setActivityTitle(selectedActivity.title);
            setActivityDesc(selectedActivity.description);
            setIsViewDialogOpen(false);
            setIsEditDialogOpen(true);
        }
    };

    const handleEditSubmit = async () => {
        if (selectedActivity) {
            try {
                const response = await fetch(`/api/activities`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: selectedActivity.id,
                        username,
                        campaignId: parseInt(selectedCampaign),
                        title: activityTitle,
                        description: activityDesc,
                    }),
                });

                if (response.ok) {
                    const updatedActivity = await response.json();
                    setActivities(activities.map(activity => 
                        activity.id === selectedActivity.id ? updatedActivity : activity
                    ));
                    setIsEditDialogOpen(false);
                    resetForm();
                } else {
                    alert('Failed to update activity');
                }
            } catch (error) {
                console.error('Error updating activity:', error);
                alert('Failed to update activity');
            }
        }
    };

    const handleDeleteClick = () => {
        setIsViewDialogOpen(false);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (selectedActivity) {
            try {
                const response = await fetch(`/api/activities`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: selectedActivity.id }),
                });

                if (response.ok) {
                    setActivities(activities.filter(activity => activity.id !== selectedActivity.id));
                    setIsDeleteDialogOpen(false);
                    setSelectedActivity(null);
                } else {
                    alert('Failed to delete activity');
                }
            } catch (error) {
                console.error('Error deleting activity:', error);
                alert('Failed to delete activity');
            }
        }
    };

    const resetForm = () => {
        setUsername("");
        setSelectedCampaign("");
        setActivityTitle("");
        setActivityDesc("");
        setSelectedActivity(null);
    };

    const getCampaignTitle = (campaignId: number) => {
        return campaigns.find(campaign => campaign.id === campaignId)?.title || 'Unknown Campaign';
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
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Aktivitas</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                    
                    <div className="px-8 pb-8">
                        <div className="overflow-x-auto rounded-xl bg-white/80 p-4 shadow-sm">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Tanggal</TableHead>
                                        <TableHead>Nama</TableHead>
                                        <TableHead>Campaign</TableHead>
                                        <TableHead>Judul Aktivitas</TableHead>
                                        <TableHead>Keterangan</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {loading ? (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center py-8">
                                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        activities.map((activity) => (
                                            <TableRow 
                                                key={activity.id} 
                                                className="cursor-pointer hover:bg-blue-50 transition-colors"
                                                onClick={() => handleActivityClick(activity)}
                                            >
                                                <TableCell>{activity.date.split("T")[0]}</TableCell>
                                                <TableCell>{activity.username}</TableCell>
                                                <TableCell>{activity.campaign?.title || getCampaignTitle(activity.campaignId)}</TableCell>
                                                <TableCell>{activity.title}</TableCell>
                                                <TableCell>{activity.description}</TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    

                    {/* View Dialog */}
                    <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Activity Details</DialogTitle>
                                <DialogDescription>Informasi detail mengenai aktivitas.</DialogDescription>
                            </DialogHeader>
                            {selectedActivity && (
                                <div className="grid grid-cols-2 gap-4 py-4">
                                    <div>
                                        <Label>Tanggal</Label>
                                        <p className="mt-1">{selectedActivity.date.split("T")[0]}</p>
                                    </div>
                                    <div>
                                        <Label>Nama</Label>
                                        <p className="mt-1">{selectedActivity.username}</p>
                                    </div>
                                    <div>
                                        <Label>Campaign</Label>
                                        <p className="mt-1">{getCampaignTitle(selectedActivity.campaignId)}</p>
                                    </div>
                                    <div>
                                        <Label>Judul</Label>
                                        <p className="mt-1">{selectedActivity.title}</p>
                                    </div>
                                    <div>
                                        <Label>Deskripsi</Label>
                                        <p className="mt-1">{selectedActivity.description}</p>
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
                                <DialogTitle>Edit Activity</DialogTitle>
                                <DialogDescription>Edit informasi detail mengenai aktivitas.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="username">Nama</Label>
                                    <Input
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username"
                                        disabled
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="campaign">Campaign</Label>
                                    <select 
                                        id="campaign"
                                        value={selectedCampaign}
                                        onChange={(e) => setSelectedCampaign(e.target.value)}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="">Select Campaign</option>
                                        {campaigns.map(campaign => (
                                            <option key={campaign.id} value={campaign.id}>
                                                {campaign.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="activityTitle">Judul</Label>
                                    <Input
                                        id="activityTitle"
                                        value={activityTitle}
                                        onChange={(e) => setActivityTitle(e.target.value)}
                                        placeholder="Activity Title"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="activityDesc">Deskripsi</Label>
                                    <Input
                                        id="activityDesc"
                                        value={activityDesc}
                                        onChange={(e) => setActivityDesc(e.target.value)}
                                        placeholder="Activity Description"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button 
                                    type="submit" 
                                    onClick={handleEditSubmit}
                                    disabled={!username || !selectedCampaign || !activityTitle || !activityDesc}
                                    className="flex items-center gap-2 hover:cursor-pointer"
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
                                <DialogTitle>Delete Activity</DialogTitle>
                                <DialogDescription>
                                    Are you sure you want to delete this activity? This action cannot be undone.
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
