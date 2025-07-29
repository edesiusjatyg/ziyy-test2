"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { FileText, Calendar, TrendingUp, Users, DollarSign, Coffee, MapPin, Undo2, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { formatCurrency } from "@/lib/format";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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
    const router = useRouter();
    const params = useParams();
    const [show, setShow] = useState(false);
    const [reportData, setReportData] = useState<ReportData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setShow(true) }, 100);
        loadReportData();
    }, []);

    const chartConfig = {
        activeMembers: {
            label: "Member Aktif",
            color: "#7bb3d6",
        },
        incidentiles: {
            label: "Insidentil",
            color: "#82ca9d",
        },
    } satisfies ChartConfig

    const memberChartData = reportData?.memberChartData || [];
    const incGymChartData = reportData?.incGymChartData || [];
    const incClassChartData = reportData?.incClassChartData || [];

    const loadReportData = async () => {
        try {
            const period = params.id as string;
            const response = await fetch(`/api/reports/${period}`);
            
            if (response.ok) {
                const dbReport = await response.json();
                setReportData(dbReport);
                return;
            }

            if (response.status === 404) {
                const generateResponse = await fetch('/api/reports/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ period })
                });
                
                if (generateResponse.ok) {
                    const newReport = await generateResponse.json();
                    setReportData(newReport);
                    return;
                }
            }
            
            throw new Error('Failed to load or generate report');
            
        } catch (error) {
            console.error('Error loading report data:', error);
            setReportData(null);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading report...</p>
                </div>
            </div>
        );
    }

    if (!reportData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">Report not found</p>
                    <Button onClick={() => router.push('/mgmt/reports')} className="mt-4">
                        Back to Reports
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-7xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    {/* Header */}
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-32 justify-start" onClick={() => router.push("/mgmt/reports")}>
                            <Undo2 className="w-4 h-4 transition-all" />
                            <span className="hidden sm:inline transition-all">Back</span>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight text-center">
                                Ziyy Gym
                            </h2>
                        </div>
                        <div className="w-32 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/mgmt/reports" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                            Reports
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator className="text-white/60"></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white text-sm md:text-base">{reportData.displayName}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className="pb-8 px-8">
                        <div className="mb-8">
                            <h3 className="text-lg md:text-xl text-gray-500 text-center mb-2">Performance Report - {reportData.displayName}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Member</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData.totalMembers}</div>
                                    <p className="text-xs text-muted-foreground">{reportData.activeMembers} aktif, {reportData.expiredMembers} expired</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Member Baru</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData.newMembers}</div>
                                    <p className="text-xs text-muted-foreground">+{reportData.renewals} perpanjangan</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Insidentil</CardTitle>
                                    <User className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData.incidentiles}</div>
                                    <p className="text-xs text-muted-foreground">Gym: {reportData.incidentilesGym}, Kelas: {reportData.incidentilesClass}</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Net Pendapatan</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className={`text-2xl font-bold ${reportData.netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {formatCurrency(reportData.netIncome)}
                                        </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Kas</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{formatCurrency(reportData.cashBalance)}</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Transaksi</CardTitle>
                                    <CardDescription>Ringkasan transaksi periode ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Pendapatan FO:</span>
                                            <span className="font-semibold">{formatCurrency(reportData.foTotalIncome)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pendapatan Kantin:</span>
                                            <span className="font-semibold">{formatCurrency(reportData.canteenTotalIncome)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pendapatan Lainnya:</span>
                                            <span className="font-semibold">{formatCurrency(reportData.accountingTotalIncome)}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">
                                                {formatCurrency(reportData.foTotalIncome + reportData.canteenTotalIncome + reportData.accountingTotalIncome)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Pengeluaran:</span>
                                            <span className="font-semibold text-red-600">{formatCurrency(reportData.foTotalExpenses + reportData.canteenTotalExpenses + reportData.accountingTotalExpenses)}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span className="font-medium">Net Pendapatan:</span>
                                            <span className={`font-bold ${reportData.netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {formatCurrency(reportData.netIncome)}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Member</CardTitle>
                                    <CardDescription>Ringkasan member periode ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Total Member:</span>
                                            <span className="font-semibold">{reportData.totalMembers}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Member Aktif:</span>
                                            <span className="font-semibold text-green-600">{reportData.activeMembers}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Member Expired:</span>
                                            <span className="font-semibold text-red-600">{reportData.expiredMembers}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Insidentil:</span>
                                            <span className="font-semibold">{reportData.incidentiles}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Insidentil Gym:</span>
                                            <span className="font-semibold">{reportData.incidentilesGym}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Insidentil Kelas:</span>
                                            <span className="font-semibold">{reportData.incidentilesClass}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Rekap Marketing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Campaign Selesai:</span>
                                            <span className="font-semibold">{reportData.finishedCampaigns}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Campaign Names:</span>
                                            <span className="font-semibold">{reportData.finishedCampaignNames.length}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Aktivitas Selesai:</span>
                                            <span className="font-semibold">{reportData.finishedCampaignActivities.length}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Rekap Front Office</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Member Baru:</span>
                                            <span className="font-semibold">{reportData.newMembers}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Perpanjangan:</span>
                                            <span className="font-semibold">{reportData.renewals}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Insidentil:</span>
                                            <span className="font-semibold">{reportData.incidentiles}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">{formatCurrency(reportData.foTotalIncome)}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Rekap Kantin</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="space-y-4">
                                            {Array.isArray(reportData.canteenItemsSold) && reportData.canteenItemsSold.length > 0 ? (
                                                reportData.canteenItemsSold.map((item: any, index: number) => (
                                                    <div key={index} className="flex justify-between items-center">
                                                        <span>{item.name}</span>
                                                        <span className="font-semibold">{item.quantity} terjual</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-gray-500">Tidak ada data penjualan</div>
                                            )}
                                        </div>

                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">{formatCurrency(reportData.canteenTotalIncome)}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Line Chart - Member Aktif</CardTitle>
                                    <CardDescription>6 Bulan Terakhir</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig}>
                                        <LineChart
                                            accessibilityLayer
                                            data={memberChartData}
                                            margin={{
                                            left: 12,
                                            right: 12,
                                            }}
                                        >
                                            <CartesianGrid vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                tickLine={false}
                                                axisLine={false}
                                                tickMargin={8}
                                                tickFormatter={(value) => value.slice(0, 3)}
                                            />
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent hideLabel />}
                                            />
                                            <Line
                                                dataKey="activeMembers"
                                                type="linear"
                                                stroke="var(--color-activeMembers)"
                                                strokeWidth={2}
                                                dot={true}
                                            />
                                        </LineChart>
                                    </ChartContainer>
                                </CardContent>
                                <CardFooter className="flex-col items-start gap-2 text-sm">
                                    <div className="text-muted-foreground leading-none">
                                        Total member aktif selama 6 bulan terakhir
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Line Chart - Insidentil Gym</CardTitle>
                                    <CardDescription>6 Bulan Terakhir</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig}>
                                        <LineChart
                                            accessibilityLayer
                                            data={incGymChartData}
                                            margin={{
                                            left: 12,
                                            right: 12,
                                            }}
                                        >
                                            <CartesianGrid vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                tickLine={false}
                                                axisLine={false}
                                                tickMargin={8}
                                                tickFormatter={(value) => value.slice(0, 3)}
                                            />
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent hideLabel />}
                                            />
                                            <Line
                                                dataKey="incidentiles"
                                                type="linear"
                                                stroke="var(--color-incidentiles)"
                                                strokeWidth={2}
                                                dot={true}
                                            />
                                        </LineChart>
                                    </ChartContainer>
                                </CardContent>
                                <CardFooter className="flex-col items-start gap-2 text-sm">
                                    <div className="text-muted-foreground leading-none">
                                        Total insidentil gym selama 6 bulan terakhir
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Line Chart - Insidentil Kelas</CardTitle>
                                    <CardDescription>6 Bulan Terakhir</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig}>
                                        <LineChart
                                            accessibilityLayer
                                            data={incClassChartData}
                                            margin={{
                                            left: 12,
                                            right: 12,
                                            }}
                                        >
                                            <CartesianGrid vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                tickLine={false}
                                                axisLine={false}
                                                tickMargin={8}
                                                tickFormatter={(value) => value.slice(0, 3)}
                                            />
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent hideLabel />}
                                            />
                                            <Line
                                                dataKey="incidentiles"
                                                type="linear"
                                                stroke="var(--color-incidentiles)"
                                                strokeWidth={2}
                                                dot={true}
                                            />
                                        </LineChart>
                                    </ChartContainer>
                                </CardContent>
                                <CardFooter className="flex-col items-start gap-2 text-sm">
                                    <div className="text-muted-foreground leading-none">
                                        Total insidentil kelas selama 6 bulan terakhir
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}