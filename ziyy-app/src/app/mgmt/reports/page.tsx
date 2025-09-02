"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Calendar, TrendingUp, Undo2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface ReportData {
    id: number;
    period: string;
    displayName: string;
    totalMembers: number;
    activeMembers: number;
    expiredMembers: number;
    newMembers: number;
    renewals: number;
    incidentiles: number;
    incidentilesGym: number;
    incidentilesClass: number;
    canteenItemsSold: any[]; // JSON data
    finishedCampaigns: number;
    finishedCampaignNames: string[];
    finishedCampaignActivities: string[];
    foTotalIncome: number;
    canteenTotalIncome: number;
    accountingTotalIncome: number;
    foTotalExpenses: number;
    canteenTotalExpenses: number;
    accountingTotalExpenses: number;
    netIncome: number;
    cashBalance: number;
    memberChartData: { month: string; activeMembers: number }[];
    incGymChartData: { month: string; incidentiles: number }[];
    incClassChartData: { month: string; incidentiles: number }[];
    status: string;
    generatedAt: string;
    updatedAt: string;
}

export default function Page() {
    const [show, setShow] = useState(false);
    const [reports, setReports] = useState<ReportData[]>([]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setShow(true) }, 100);
        loadReportData();
    }, []);

    const loadReportData = async () => {
        try {
            const response = await fetch('/api/reports');
            if(!response.ok){
                throw new Error('Failed to fetch reports');
            }

            const data = await response.json();
            setReports(data);
        } catch (error) {
            console.error('Error fetching reports:', error);
        } finally {
            setLoading(false);
        }
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>;
            case 'IN_PROGRESS':
                return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">In Progress</span>;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-24 justify-start" onClick={() => router.push("/mgmt")}>
                            <Undo2 className="w-4 h-4 transition-all" />
                            <span className="hidden sm:inline transition-all">Back</span>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight text-center">
                                Ziyy Gym
                            </h2>
                        </div>
                        <div className="w-24 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/mgmt" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                            Management
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator className="text-white/60"></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Reports</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    {/* Reports Grid */}
                    <div className="px-8 pb-8">
                        <div hidden={!loading} className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-400"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" hidden={loading}>
                            <Card className="hover:shadow-lg transition-shadow duration-200 border border-gray-200 justify-between">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-gray-200 rounded-lg">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-semibold text-gray-800">
                                                    Custom Report
                                                </CardTitle>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Calendar className="w-4 h-4 text-gray-500" />
                                        <p className="text-sm text-gray-600">Tentukan tanggal sendiri.</p>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="mt-4">
                                        <Button 
                                            className="w-full cursor-pointer" 
                                            variant="outline"
                                            onClick={() => router.push(`/mgmt/reports/custom`)}
                                        >
                                            Buat Custom Report
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {reports.map((report) => (
                                <Card key={report.id} className="hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="p-2 bg-blue-100 rounded-lg">
                                                    <FileText className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg font-semibold text-gray-800">
                                                        {report.displayName}
                                                    </CardTitle>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Calendar className="w-4 h-4 text-gray-500" />
                                            <p className="text-sm text-gray-600">{report.period}</p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-gray-500" />
                                                {getStatusBadge(report.status)}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <Button 
                                                className="w-full cursor-pointer" 
                                                variant="outline"
                                                onClick={() => router.push(`/mgmt/reports/${report.period}`)}
                                            >
                                                Lihat Report
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}