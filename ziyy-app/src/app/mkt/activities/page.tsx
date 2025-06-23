"use client";

import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Activity {
    id: string;
    username: string;
    campaignId: string;
    title: string;
    description: string;
    date: string;
}

interface Campaign {
    id: string;
    title: string;
}

export default function ActivitiesPage() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    // Form states
    const [username, setUsername] = useState("");
    const [selectedCampaign, setSelectedCampaign] = useState("");
    const [activityTitle, setActivityTitle] = useState("");
    const [activityDesc, setActivityDesc] = useState("");

    useEffect(() => {
        // Load activities and campaigns
        const loadData = async () => {
            const activitiesRes = await fetch('/activityMkt.json');
            const activitiesData = await activitiesRes.json();
            setActivities(activitiesData.activities);

            const campaignsRes = await fetch('/campaigns.json');
            const campaignsData = await campaignsRes.json();
            setCampaigns(campaignsData.campaigns);
        };
        loadData();
    }, []);

    const handleActivityClick = (activity: Activity) => {
        setSelectedActivity(activity);
        setIsViewDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedActivity) {
            setUsername(selectedActivity.username);
            setSelectedCampaign(selectedActivity.campaignId);
            setActivityTitle(selectedActivity.title);
            setActivityDesc(selectedActivity.description);
            setIsViewDialogOpen(false);
            setIsEditDialogOpen(true);
        }
    };

    const handleEditSubmit = () => {
        if (selectedActivity) {
            const updatedActivity = {
                ...selectedActivity,
                username,
                campaignId: selectedCampaign,
                title: activityTitle,
                description: activityDesc,
            };

            setActivities(activities.map(activity => 
                activity.id === selectedActivity.id ? updatedActivity : activity
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
        if (selectedActivity) {
            setActivities(activities.filter(activity => activity.id !== selectedActivity.id));
            setIsDeleteDialogOpen(false);
            setSelectedActivity(null);
        }
    };

    const resetForm = () => {
        setUsername("");
        setSelectedCampaign("");
        setActivityTitle("");
        setActivityDesc("");
        setSelectedActivity(null);
    };

    const getCampaignTitle = (campaignId: string) => {
        return campaigns.find(campaign => campaign.id === campaignId)?.title || 'Unknown Campaign';
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans" style={{ background: '#629dc9' }}>
            <div className="w-full max-w-6xl">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <h2 className="text-white text-2xl tracking-tight">Ziyy Gym | Activities</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/mkt" className="text-white/90 hover:text-white">
                                        Marketing
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>Activities</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="overflow-x-auto rounded-xl bg-white/80 p-4 shadow-sm">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Username</TableHead>
                                    <TableHead>Campaign</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {activities.map((activity) => (
                                    <TableRow 
                                        key={activity.id} 
                                        className="cursor-pointer hover:bg-blue-50 transition-colors"
                                        onClick={() => handleActivityClick(activity)}
                                    >
                                        <TableCell>{activity.date}</TableCell>
                                        <TableCell>{activity.username}</TableCell>
                                        <TableCell>{getCampaignTitle(activity.campaignId)}</TableCell>
                                        <TableCell>{activity.title}</TableCell>
                                        <TableCell>{activity.description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* View Dialog */}
                    <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Activity Details</DialogTitle>
                            </DialogHeader>
                            {selectedActivity && (
                                <div className="grid gap-4 py-4">
                                    <div>
                                        <Label>Date</Label>
                                        <p className="mt-1">{selectedActivity.date}</p>
                                    </div>
                                    <div>
                                        <Label>Username</Label>
                                        <p className="mt-1">{selectedActivity.username}</p>
                                    </div>
                                    <div>
                                        <Label>Campaign</Label>
                                        <p className="mt-1">{getCampaignTitle(selectedActivity.campaignId)}</p>
                                    </div>
                                    <div>
                                        <Label>Title</Label>
                                        <p className="mt-1">{selectedActivity.title}</p>
                                    </div>
                                    <div>
                                        <Label>Description</Label>
                                        <p className="mt-1">{selectedActivity.description}</p>
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
                                <DialogTitle>Edit Activity</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username"
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
                                    <Label htmlFor="activityTitle">Title</Label>
                                    <Input
                                        id="activityTitle"
                                        value={activityTitle}
                                        onChange={(e) => setActivityTitle(e.target.value)}
                                        placeholder="Activity Title"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="activityDesc">Description</Label>
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
