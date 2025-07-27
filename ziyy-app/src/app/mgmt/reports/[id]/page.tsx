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
    period: string;
    displayName: string;
    frontOffice: {
        newMembers: number;
        renewals: number;
        revenue: number;
        incidentiles: number;
        totalMembers: number;
        activeMembers: number;
        expiredMembers: number;
    };
    canteen: {
        totalTransactions: number;
        revenue: number;
        topItems: { name: string; quantity: number }[];
    };
    accounting: {
        cashBalance: number;
        totalIncome: number;
        totalExpenses: number;
        netProfit: number;
        transactionCount: number;
    };
    marketing: {
        activeCampaigns: number;
        completedActivities: number;
        reach: number;
    };
}

export default function ReportDetailPage() {
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
    } satisfies ChartConfig

    const chartData = [
        { month: "Jan", activeMembers: 0 },
        { month: "Feb", activeMembers: 0 },
        { month: "Mar", activeMembers: 0 },
        { month: "Apr", activeMembers: 12 },
        { month: "May", activeMembers: 48 },
        { month: "Jun", activeMembers: 96 },
    ];

    const loadReportData = async () => {
        try {
            // In a real app, you'd fetch this from an API
            // For now, we'll generate mock data based on the period
            const period = params.id as string;
            const [year, month] = period.split('-');
            const monthNames = [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ];
            const displayName = `${monthNames[parseInt(month) - 1]} ${year}`;

            // Generate realistic member counts
            const totalMembers = Math.floor(Math.random() * 200) + 80; // 80-280 total members
            const expiredMembers = Math.floor(totalMembers * 0.1) + Math.floor(Math.random() * 15); // 10% + some variance
            const activeMembers = totalMembers - expiredMembers;
            const newMembers = Math.floor(Math.random() * 30) + 5; // 5-35 new members
            const renewals = Math.floor(Math.random() * 20) + 3; // 3-23 renewals

            // Mock data generation
            const mockData: ReportData = {
                period,
                displayName,
                frontOffice: {
                    newMembers,
                    renewals,
                    revenue: Math.floor(Math.random() * 5000000) + 1000000,
                    incidentiles: Math.floor(Math.random() * 100) + 1, // 1-100 incidentiles
                    totalMembers,
                    activeMembers,
                    expiredMembers
                },
                canteen: {
                    totalTransactions: Math.floor(Math.random() * 200) + 50,
                    revenue: Math.floor(Math.random() * 2000000) + 500000,
                    topItems: [
                        { name: "Americano", quantity: Math.floor(Math.random() * 100) + 20 },
                        { name: "Creatine", quantity: Math.floor(Math.random() * 80) + 15 },
                        { name: "Cleo Besar", quantity: Math.floor(Math.random() * 120) + 30 }
                    ]
                },
                accounting: {
                    cashBalance: Math.floor(Math.random() * 1000000) + 100000,
                    totalIncome: Math.floor(Math.random() * 8000000) + 2000000,
                    totalExpenses: Math.floor(Math.random() * 6000000) + 1000000,
                    netProfit: 0, // Will be calculated
                    transactionCount: Math.floor(Math.random() * 150) + 50
                },
                marketing: {
                    activeCampaigns: Math.floor(Math.random() * 8) + 2,
                    completedActivities: Math.floor(Math.random() * 20) + 5,
                    reach: Math.floor(Math.random() * 5000) + 1000
                }
            };

            // Calculate net profit
            mockData.accounting.netProfit = mockData.frontOffice.revenue + mockData.canteen.revenue + mockData.accounting.totalIncome - mockData.accounting.totalExpenses;

            setReportData(mockData);
        } catch (error) {
            console.error('Error loading report data:', error);
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
                                    <div className="text-2xl font-bold">{reportData.frontOffice.totalMembers}</div>
                                    <p className="text-xs text-muted-foreground">{reportData.frontOffice.activeMembers} aktif, {reportData.frontOffice.expiredMembers} expired</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Member Baru</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData.frontOffice.newMembers}</div>
                                    <p className="text-xs text-muted-foreground">+{reportData.frontOffice.renewals} perpanjangan</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Insidentil</CardTitle>
                                    <User className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData.frontOffice.incidentiles}</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Net Pendapatan</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className={`text-2xl font-bold ${reportData.accounting.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {formatCurrency(reportData.accounting.netProfit)}
                                        </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Kas</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{formatCurrency(reportData.accounting.cashBalance)}</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Transaksi</CardTitle>
                                    <CardDescription>Ringkasan transaksi periode ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Pendapatan FO:</span>
                                            <span className="font-semibold">{formatCurrency(reportData.frontOffice.revenue)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pendapatan Kantin:</span>
                                            <span className="font-semibold">{formatCurrency(reportData.canteen.revenue)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pendapatan Lainnya:</span>
                                            <span className="font-semibold">{formatCurrency(reportData.accounting.totalIncome)}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">
                                                {formatCurrency(reportData.frontOffice.revenue + reportData.canteen.revenue + reportData.accounting.totalIncome)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Pengeluaran:</span>
                                            <span className="font-semibold text-red-600">{formatCurrency(reportData.accounting.totalExpenses)}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span className="font-medium">Net Pendapatan:</span>
                                            <span className={`font-bold ${reportData.accounting.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {formatCurrency(reportData.accounting.netProfit)}
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
                                            <span className="font-semibold">{reportData.frontOffice.totalMembers}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Member Aktif:</span>
                                            <span className="font-semibold text-green-600">{reportData.frontOffice.activeMembers}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Member Expired:</span>
                                            <span className="font-semibold text-red-600">{reportData.frontOffice.expiredMembers}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Insidentil:</span>
                                            <span className="font-semibold">{reportData.frontOffice.incidentiles}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Insidentil Gym :</span>
                                            <span className="font-semibold">{reportData.frontOffice.activeMembers}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Insidentil Kelas :</span>
                                            <span className="font-semibold">{reportData.frontOffice.expiredMembers}</span>
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
                                            <span className="font-semibold">{reportData.marketing.activeCampaigns}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Aktivitas Selesai:</span>
                                            <span className="font-semibold">{reportData.marketing.completedActivities}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Reach:</span>
                                            <span className="font-semibold">{reportData.marketing.reach.toLocaleString()}</span>
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
                                            <span className="font-semibold">{reportData.frontOffice.newMembers}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Perpanjangan:</span>
                                            <span className="font-semibold">{reportData.frontOffice.renewals}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Insidentil:</span>
                                            <span className="font-semibold">{reportData.frontOffice.incidentiles}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">{formatCurrency(reportData.frontOffice.revenue)}</span>
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
                                            {reportData.canteen.topItems.map((item, index) => (
                                                <div key={index} className="flex justify-between items-center">
                                                    <span className="">{item.name}</span>
                                                    <span className="font-semibold">{item.quantity} terjual</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">{formatCurrency(reportData.canteen.revenue)}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Line Chart - Member Aktif</CardTitle>
                                    <CardDescription>April - Agustus 2025</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig}>
                                        <LineChart
                                            accessibilityLayer
                                            data={chartData}
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
                                        Total member aktif selama 6 bulan terakhir (sejak April 2025)
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