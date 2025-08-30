"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { hasMktCrudAccess } from "@/lib/rbac";
import { CirclePlus, ChevronsRight, Undo2 } from "lucide-react";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface Campaign {
    id: number;
    title: string;
    description: string | null;
    kpi: string | null;
    startDate: string;
    endDate: string;
    status: string;
}

interface Activity {
    id: number;
    username: string;
    campaignId: number | null;
    campaign?: Campaign;
    title: string;
    description: string | null;
    date: string;
}

export default function Page() {
    const router = useRouter();
    const { data: session } = useSession();

    // Permission checks
    const canCreate = session?.user?.role ? hasMktCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasMktCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasMktCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasMktCrudAccess(session.user.role, "DELETE") : false;

    const [isAddActivityDialogOpen, setIsAddActivityDialogOpen] = useState(false);
    const [isAddCampaignDialogOpen, setIsAddCampaignDialogOpen] = useState(false);
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    // Activity form states
    const [activityTitle, setActivityTitle] = useState("");
    const [activityDesc, setActivityDesc] = useState("");
    const [selectedCampaign, setSelectedCampaign] = useState("");
    const [username, setUsername] = useState("");

    // Campaign form states
    const [campaignTitle, setCampaignTitle] = useState("");
    const [campaignDesc, setCampaignDesc] = useState("");
    const [campaignKpi, setCampaignKpi] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [show, setShow] = useState(false);

    const loadData = async () => {
        try {
            setLoading(true);
            
            // Load campaigns
            const campaignsResponse = await fetch('/api/campaigns');
            if (campaignsResponse.ok) {
                const campaignsData = await campaignsResponse.json();
                setCampaigns(campaignsData);
            }

            // Load activities
            const activitiesResponse = await fetch('/api/activities');
            if (activitiesResponse.ok) {
                const activitiesData = await activitiesResponse.json();
                setActivities(activitiesData);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
        loadData();
    }, []);

    const getActiveCampaigns = () => {
        const today = new Date().toISOString().split('T')[0];
        return campaigns.filter(campaign => 
            campaign.startDate <= today && campaign.endDate >= today
        );
    };

    const getTodayActivities = () => {
        const today = new Date().toISOString().split('T')[0];
        return activities.filter(activity => activity.date === today);
    };

    const handleAddActivity = async () => {
        if (!activityTitle.trim() || !activityDesc.trim() || !selectedCampaign || !username.trim()) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('/api/activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: activityTitle,
                    description: activityDesc,
                    campaignId: parseInt(selectedCampaign),
                    username: username
                }),
            });

            if (response.ok) {
                const newActivity = await response.json();
                setActivities([...activities, newActivity]);
                
                // Reset form
                setActivityTitle("");
                setActivityDesc("");
                setSelectedCampaign("");
                setUsername("");
                setIsAddActivityDialogOpen(false);
            } else {
                alert('Failed to add activity');
            }
        } catch (error) {
            console.error('Error adding activity:', error);
            alert('Failed to add activity');
        }
    };

    const handleAddCampaign = async () => {
        if (!campaignTitle.trim() || !campaignDesc.trim() || !campaignKpi.trim() || !startDate || !endDate) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('/api/campaigns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: campaignTitle,
                    description: campaignDesc,
                    kpi: campaignKpi,
                    startDate: new Date(startDate).toISOString(),
                    endDate: new Date(endDate).toISOString(),
                    status: 'ACTIVE'
                }),
            });

            if (response.ok) {
                const newCampaign = await response.json();
                setCampaigns([...campaigns, newCampaign]);
                
                // Reset form
                setCampaignTitle("");
                setCampaignDesc("");
                setCampaignKpi("");
                setStartDate("");
                setEndDate("");
                setIsAddCampaignDialogOpen(false);
            } else {
                alert('Failed to add campaign');
            }
        } catch (error) {
            console.error('Error adding campaign:', error);
            alert('Failed to add campaign');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-3xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
                        {/* Left: Back Button - Fixed Width */}
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-24 justify-start" onClick={() => router.push("/home")}>
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
                        <div className="w-24 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/home" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                            Home
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Marketing</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    {/* Navigation Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-8">
                        <Link href="/mkt/campaigns-active" className="block">
                            <Card className="bg-white rounded-xl shadow-sm justify-between hover:shadow-lg transition-all border-0 cursor-pointer h-full">
                                <CardHeader>
                                    <CardTitle className="text-center">Campaign Aktif</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">
                                        {loading ? (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        ) : (
                                            getActiveCampaigns().length
                                        )}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/mkt/activities" className="block">
                            <Card className="bg-white rounded-xl shadow-sm justify-between hover:shadow-lg transition-all border-0 cursor-pointer h-full">
                                <CardHeader>
                                    <CardTitle className="text-center">Aktivitas Hari Ini</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">
                                        {loading ? (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        ) : (
                                            getTodayActivities().length
                                        )}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/mkt/campaigns" className="block">
                            <Card className="bg-white rounded-xl shadow-sm justify-between hover:shadow-lg transition-all border-0 cursor-pointer h-full">
                                <CardHeader>
                                    <CardTitle className="text-center">Daftar Campaign</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">
                                        {loading ? (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        ) : (
                                            campaigns.length
                                        )}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6 px-8 pb-8">
                        {canCreate && (
                        <Dialog open={isAddCampaignDialogOpen} onOpenChange={setIsAddCampaignDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="text-gray-900">Tambah Campaign</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2 transition-all">
                                        <CirclePlus className="text-[#7bb3d6]" />
                                        <p className="text-gray-700">Tambah</p>
                                    </CardFooter>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Tambah Campaign</DialogTitle>
                                    <DialogDescription>
                                        Masukkan detail campaign baru di sini.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Judul Campaign</Label>
                                        <Input
                                            id="title"
                                            value={campaignTitle}
                                            onChange={(e) => setCampaignTitle(e.target.value)}
                                            placeholder="Judul Campaign"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="description">Deskripsi</Label>
                                        <Input
                                            id="description"
                                            value={campaignDesc}
                                            onChange={(e) => setCampaignDesc(e.target.value)}
                                            placeholder="Deskripsi Campaign"
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
                                            <Label htmlFor="startDate">Tanggal Mulai</Label>
                                            <Input
                                                id="startDate"
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="endDate">Tanggal Selesai</Label>
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
                                        onClick={handleAddCampaign}
                                        disabled={!campaignTitle || !campaignDesc || !campaignKpi || !startDate || !endDate}
                                    >
                                        Tambah Campaign
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        )}

                        {canCreate && (
                        <Dialog open={isAddActivityDialogOpen} onOpenChange={setIsAddActivityDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="text-gray-900">Catat Aktivitas</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2 transition-all">
                                        <CirclePlus className="text-[#7bb3d6]" />
                                        <p className="text-gray-700">Tambah</p>
                                    </CardFooter>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Catat Aktivitas</DialogTitle>
                                    <DialogDescription>
                                        Masukkan detail aktivitas di sini.
                                    </DialogDescription>
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
                                            <option value="">Pilih Campaign</option>
                                            {campaigns.map(campaign => (
                                                <option key={campaign.id} value={campaign.id}>
                                                    {campaign.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="activityTitle">Judul Aktivitas</Label>
                                        <Input
                                            id="activityTitle"
                                            value={activityTitle}
                                            onChange={(e) => setActivityTitle(e.target.value)}
                                            placeholder="Judul Aktivitas"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="activityDesc">Deskripsi</Label>
                                        <Input
                                            id="activityDesc"
                                            value={activityDesc}
                                            onChange={(e) => setActivityDesc(e.target.value)}
                                            placeholder="Deskripsi Aktivitas"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button 
                                        type="submit" 
                                        onClick={handleAddActivity}
                                        disabled={!username || !selectedCampaign || !activityTitle || !activityDesc}
                                    >
                                        Tambah Aktivitas
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}