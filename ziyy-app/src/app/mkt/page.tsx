"use client";

import { useState, useEffect } from "react";
import { CirclePlus, ChevronsRight } from "lucide-react";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface Campaign {
    id: string;
    title: string;
    description: string;
    kpi: string;
    startDate: string;
    endDate: string;
}

interface Activity {
    id: string;
    username: string;
    campaignId: string;
    title: string;
    description: string;
    date: string;
}

export default function Page() {
    const [isAddActivityDialogOpen, setIsAddActivityDialogOpen] = useState(false);
    const [isAddCampaignDialogOpen, setIsAddCampaignDialogOpen] = useState(false);
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [activities, setActivities] = useState<Activity[]>([]);

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

    useEffect(() => {
        // Load campaigns and activities
        const loadData = async () => {
            const campaignsRes = await fetch('/campaigns.json');
            const campaignsData = await campaignsRes.json();
            setCampaigns(campaignsData.campaigns);

            const activitiesRes = await fetch('/activityMkt.json');
            const activitiesData = await activitiesRes.json();
            setActivities(activitiesData.activities);
        };
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

    const handleAddActivity = () => {
        const newActivity = {
            id: (activities.length + 1).toString(),
            username,
            campaignId: selectedCampaign,
            title: activityTitle,
            description: activityDesc,
            date: new Date().toISOString().split('T')[0]
        };

        setActivities([...activities, newActivity]);
        setActivityTitle("");
        setActivityDesc("");
        setSelectedCampaign("");
        setUsername("");
        setIsAddActivityDialogOpen(false);
    };

    const handleAddCampaign = () => {
        const newCampaign = {
            id: (campaigns.length + 1).toString(),
            title: campaignTitle,
            description: campaignDesc,
            kpi: campaignKpi,
            startDate,
            endDate
        };

        setCampaigns([...campaigns, newCampaign]);
        setCampaignTitle("");
        setCampaignDesc("");
        setCampaignKpi("");
        setStartDate("");
        setEndDate("");
        setIsAddCampaignDialogOpen(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans" style={{ background: '#629dc9' }}>
            <div className="w-full max-w-6xl">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <h2 className="text-white text-2xl tracking-tight">Ziyy Gym | Marketing</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-white/90 hover:text-white">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>Marketing</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-0">
                            <CardHeader>
                                <CardTitle className="text-gray-900">Campaign Aktif</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl text-gray-700">{getActiveCampaigns().length}</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-0">
                            <CardHeader>
                                <CardTitle className="text-gray-900">Total Aktivitas</CardTitle>
                                <CardDescription>Hari ini</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl text-gray-700">{getTodayActivities().length}</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <Dialog open={isAddCampaignDialogOpen} onOpenChange={setIsAddCampaignDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-0 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="text-gray-900">Tambah Campaign</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2">
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

                        <Dialog open={isAddActivityDialogOpen} onOpenChange={setIsAddActivityDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-0 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="text-gray-900">Catat Aktivitas</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2">
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
                    </div>
                </div>
            </div>
        </div>
    );
}