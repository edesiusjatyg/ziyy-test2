"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Calendar, TrendingUp, Undo2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface MonthlyReport {
    id: string;
    period: string;
    displayName: string;
    displayDate: string;
    year: number;
    month: number;
    status: 'completed' | 'in_progress';
}

export default function Page() {
    const [show, setShow] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => { setShow(true) }, 100);
    }, []);

    const generateMonthlyReports = (): MonthlyReport[] => {
        const reports: MonthlyReport[] = [];
        const currentDate = new Date();
        const startDate = new Date(2025, 3, 1);
        
        const startYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        
        const totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth) + 2;
        
        for (let i = 0; i < totalMonths; i++) {
            const reportDate = new Date(startYear, startMonth + i, 24);
            const monthNames = [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ];
            
            const period = `${reportDate.getFullYear()}-${String(reportDate.getMonth() + 1).padStart(2, '0')}`;
            const displayName = `${monthNames[reportDate.getMonth()]} ${reportDate.getFullYear()}`;
            const displayDate = `25 ${monthNames[reportDate.getMonth()-1]} - 24 ${monthNames[reportDate.getMonth()]} ${reportDate.getFullYear()}`;

            let status: 'completed' | 'in_progress' = 'completed';
            if (reportDate > currentDate) {
                status = 'in_progress';
            }

            reports.push({
                id: period,
                period,
                displayName,
                displayDate,
                year: reportDate.getFullYear(),
                month: reportDate.getMonth() + 1,
                status
            });
        }
        
        return reports;
    };

    const monthlyReports = generateMonthlyReports();

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>;
            case 'in_progress':
                return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">In Progress</span>;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    {/* Header */}
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
                        <div className="mb-8">
                            <h3 className="text-base md:text-lg text-gray-500 mb-2 text-center">Monthly Performance Reports</h3>
                            <p className="text-sm md:text-base text-gray-500 text-center">View detailed performance reports for each month</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {monthlyReports.map((report) => (
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
                                            <p className="text-sm text-gray-600">{report.displayDate}</p>
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
                                                onClick={() => router.push(`/mgmt/reports/${report.id}`)}
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