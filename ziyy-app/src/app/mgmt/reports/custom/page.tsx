"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { FileText, Calendar, CalendarIcon, TrendingUp, Users, DollarSign, Coffee, MapPin, Undo2, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { formatCurrency } from "@/lib/format";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, set } from "date-fns";
import { cn } from "@/lib/utils";

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
    const [showReport, setShowReport] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);


    useEffect(() => {
        setTimeout(() => { setShow(true) }, 100);
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

    function getPeriodString(date: Date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        return `${year}-${month}`;
    }

    const handleGenerateReport = async () => {
        if (startDate && endDate) {
            setLoading(true);
            setError(null);
            setReportData(null);
            setShowReport(false);
            try {
                const period = getPeriodString(endDate);
                const res = await fetch("/api/reports/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ period })
                });
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.error || "Gagal mengambil data laporan");
                }
                const data = await res.json();
                setReportData(data);
                setShowReport(true);
            } catch (e: any) {
                setError(e.message || "Gagal mengambil data laporan");
            } finally {
                setLoading(false);
            }
        }
    };

    const handleReset = () => {
        setStartDate(undefined);
        setEndDate(undefined);
        setReportData(null);
        setShowReport(false);
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-7xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
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
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Custom</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="pb-8 px-8">
                        <div className="py-8" hidden={!loading}>
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-400 mx-auto"></div>
                            <p className="mt-2 text-gray-600 text-center">Loading report...</p>
                        </div>

                        <div className="max-w-2xl mx-auto" hidden={loading}>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5" />
                                        Pilih Periode Laporan
                                    </CardTitle>
                                    <CardDescription>Tentukan rentang tanggal untuk laporan yang diinginkan</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="startDate">Tanggal Mulai</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal cursor-pointer",
                                                            !startDate && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {startDate ? format(startDate, "PPP") : <span>Pilih tanggal mulai</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <CalendarComponent
                                                        mode="single"
                                                        selected={startDate}
                                                        onSelect={setStartDate}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="endDate">Tanggal Akhir</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal cursor-pointer",
                                                            !endDate && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {endDate ? format(endDate, "PPP") : <span>Pilih tanggal akhir</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <CalendarComponent
                                                        mode="single"
                                                        selected={endDate}
                                                        onSelect={setEndDate}
                                                        disabled={(date) =>
                                                            startDate ? date < startDate : false
                                                        }
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>

                                    {startDate && endDate && (
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            <p className="text-blue-800 font-medium">
                                                Periode Laporan: {format(startDate, "dd MMM yyyy")} - {format(endDate, "dd MMM yyyy")}
                                            </p>
                                            <p className="text-blue-600 text-sm mt-1">
                                                Total: {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1} hari
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <Button 
                                        onClick={handleGenerateReport}
                                        disabled={!startDate || !endDate || loading}
                                        className="flex-1 cursor-pointer"
                                    >
                                        {loading ? (
                                            <span>Mengambil data...</span>
                                        ) : (
                                            <>
                                                <Calendar className="mr-2 h-4 w-4" />
                                                Lihat Report
                                            </>
                                        )}
                                    </Button>
                                    {(startDate || endDate) && (
                                        <Button variant="outline" onClick={handleReset} className="cursor-pointer" disabled={loading}>
                                            Reset
                                        </Button>
                                    )}
                                </CardFooter>
                                {error && (
                                    <div className="bg-red-100 text-red-700 p-2 rounded mt-2 border border-red-200">
                                        {error}
                                    </div>
                                )}
                            </Card>
                        </div>

                        {showReport && reportData && (
                        <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 my-8">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Member</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData?.totalMembers || 0}</div>
                                    <p className="text-xs text-muted-foreground">{reportData?.activeMembers || 0} aktif, {reportData?.expiredMembers || 0} expired</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Member Baru</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData?.newMembers || 0}</div>
                                    <p className="text-xs text-muted-foreground">+{reportData?.renewals || 0} perpanjangan</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Insidentil</CardTitle>
                                    <User className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{reportData?.incidentiles || 0}</div>
                                    <p className="text-xs text-muted-foreground">Gym: {reportData?.incidentilesGym || 0}, Kelas: {reportData?.incidentilesClass || 0}</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Net Pendapatan</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className={`text-2xl font-bold ${(reportData?.netIncome || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {formatCurrency(reportData?.netIncome || 0)}
                                        </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Kas</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{formatCurrency(reportData?.cashBalance || 0)}</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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

                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Transaksi</CardTitle>
                                    <CardDescription>Ringkasan transaksi periode ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Pendapatan FO:</span>
                                            <span className="font-semibold">{formatCurrency(reportData?.foTotalIncome || 0)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pendapatan Kantin:</span>
                                            <span className="font-semibold">{formatCurrency(reportData?.canteenTotalIncome || 0)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pendapatan Lainnya:</span>
                                            <span className="font-semibold">{formatCurrency(reportData?.accountingTotalIncome || 0)}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">
                                                {formatCurrency((reportData?.foTotalIncome || 0) + (reportData?.canteenTotalIncome || 0) + (reportData?.accountingTotalIncome || 0))}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Pengeluaran:</span>
                                            <span className="font-semibold text-red-600">{formatCurrency((reportData?.foTotalExpenses || 0) + (reportData?.canteenTotalExpenses || 0) + (reportData?.accountingTotalExpenses || 0))}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span className="font-medium">Net Pendapatan:</span>
                                            <span className={`font-bold ${(reportData?.netIncome || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {formatCurrency(reportData?.netIncome || 0)}
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
                                            <span className="font-semibold">{reportData?.totalMembers || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Member Aktif:</span>
                                            <span className="font-semibold text-green-600">{reportData?.activeMembers || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Member Expired:</span>
                                            <span className="font-semibold text-red-600">{reportData?.expiredMembers || 0}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-4">
                                            <span>Total Insidentil:</span>
                                            <span className="font-semibold">{reportData?.incidentiles || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Insidentil Gym:</span>
                                            <span className="font-semibold">{reportData?.incidentilesGym || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Insidentil Kelas:</span>
                                            <span className="font-semibold">{reportData?.incidentilesClass || 0}</span>
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
                                            {Array.isArray(reportData?.canteenItemsSold) && reportData.canteenItemsSold.length > 0 ? (
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
                                            <span className="font-semibold text-green-600">{formatCurrency(reportData?.canteenTotalIncome || 0)}</span>
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
                                            <span className="font-semibold">{reportData?.newMembers || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Perpanjangan:</span>
                                            <span className="font-semibold">{reportData?.renewals || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Insidentil:</span>
                                            <span className="font-semibold">{reportData?.incidentiles || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Pendapatan:</span>
                                            <span className="font-semibold text-green-600">{formatCurrency(reportData?.foTotalIncome || 0)}</span>
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
                                            <span className="font-semibold">{reportData?.finishedCampaigns || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Campaign Names:</span>
                                            <span className="font-semibold">{reportData?.finishedCampaignNames.length || 0}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Aktivitas Selesai:</span>
                                            <span className="font-semibold">{reportData?.finishedCampaignActivities.length || 0}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}