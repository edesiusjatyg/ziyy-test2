"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, CalendarIcon, Undo2, Users, DollarSign, User, Weight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";
// Placeholder for report data structure (copy from mgmt reports [id] page)
const mockReportData = {
    displayName: "Periode Custom",
    totalMembers: 120,
    activeMembers: 100,
    expiredMembers: 20,
    newMembers: 10,
    renewals: 5,
    incidentiles: 15,
    incidentilesGym: 10,
    incidentilesClass: 5,
    foTotalIncome: 10000000,
    canteenTotalIncome: 2000000,
    accountingTotalIncome: 500000,
    foTotalExpenses: 3000000,
    canteenTotalExpenses: 1000000,
    accountingTotalExpenses: 200000,
    netIncome: 9000000,
    cashBalance: 15000000,
    canteenItemsSold: [
        { name: "Air Mineral", quantity: 50 },
        { name: "Kopi", quantity: 30 }
    ],
    finishedCampaigns: 2,
    finishedCampaignNames: ["Promo A", "Promo B"],
    finishedCampaignActivities: ["Flyer", "IG Post"],
};
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export default function Page() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();

    useEffect(() => {
        setTimeout(() => { setShow(true) }, 100);
    }, []);


    const [reportData, setReportData] = useState<any | null>(null);
    const [showReport, setShowReport] = useState(false);

    // Helper: convert date to period string (YYYY-MM)
    function getPeriodString(date: Date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        return `${year}-${month}`;
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateReport = async () => {
        if (startDate && endDate) {
            setLoading(true);
            setError(null);
            setShowReport(false);
            setReportData(null);
            try {
                // Use endDate for period (monthly report is by end month)
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
        setShowReport(false);
        setReportData(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-7xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    {/* Header */}
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-32 justify-start" onClick={() => router.push("/fo")}>\
                            <Undo2 className="w-4 h-4 transition-all" />
                            <span className="hidden sm:inline transition-all">Back</span>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight text-center">
                                Laporan Rekap
                            </h2>
                        </div>
                        <div className="w-32 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                            FO
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator className="text-white/60"></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Rekap</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    {/* Date Selection Panel */}
                    <div className="pb-8 px-8 max-w-2xl mx-auto">
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

                    {/* Report Section (copied style from mgmt reports [id]) */}
                    {showReport && reportData && (
                        <div className="pb-8 px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                {/* Pendapatan Gym */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Pendapatan Gym</CardTitle>
                                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{formatCurrency(reportData.foTotalIncome)}</div>
                                        <p className="text-xs text-muted-foreground">Total pemasukan FO</p>
                                    </CardContent>
                                </Card>

                                {/* Pendapatan Kantin */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Pendapatan Kantin</CardTitle>
                                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{formatCurrency(reportData.canteenTotalIncome)}</div>
                                        <p className="text-xs text-muted-foreground">Total pemasukan kantin</p>
                                    </CardContent>
                                </Card>

                                {/* Pengeluaran Total FO */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Pengeluaran Total</CardTitle>
                                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{formatCurrency(reportData.foTotalExpenses)}</div>
                                        <p className="text-xs text-muted-foreground">Total pengeluaran FO</p>
                                    </CardContent>
                                </Card>

                                {/* Net Income (Pendapatan Total) */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Pendapatan Total</CardTitle>
                                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className={`text-2xl font-bold ${reportData.netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {formatCurrency(reportData.netIncome)}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
                                {/* Member Baru Gym */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Member Baru Gym</CardTitle>
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{reportData.newMembers}</div>
                                        <p className="text-xs text-muted-foreground">Member baru gym</p>
                                    </CardContent>
                                </Card>

                                {/* Member PT (jumlah pembelian paket PT) */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Mulai Member PT</CardTitle>
                                        <Weight className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{typeof reportData.ptMembers === 'number' ? reportData.ptMembers : 0}</div>
                                        <p className="text-xs text-muted-foreground">Pembelian member PT</p>
                                    </CardContent>
                                </Card>

                                {/* Perpanjangan Member */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Perpanjangan Gym</CardTitle>
                                        <User className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{typeof reportData.renewals === 'number' ? reportData.renewals : 0}</div>
                                        <p className="text-xs text-muted-foreground">Perpanjangan member gym</p>
                                    </CardContent>
                                </Card>

                                {/* Jumlah Absensi Member (jumlah kedatangan/arrivals pada periode) */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Kedatangan Member</CardTitle>
                                        <User className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className={`text-2xl font-bold ${reportData.netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {typeof reportData.memberArrivals === 'number' ? reportData.memberArrivals : 0}
                                        </div>
                                        <p className="text-xs text-muted-foreground">Absensi member gym</p>
                                    </CardContent>
                                </Card>

                                {/* Jumlah Insidentil */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Insidentil</CardTitle>
                                        <User className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{reportData.incidentiles}</div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Rekap Insidentil</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <span>Gym: </span>
                                                <span className="font-semibold">{reportData.newMembers}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sauna: </span>
                                                <span className="font-semibold">{reportData.renewals}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Kelas (namaKelas): </span>
                                                <span className="font-semibold">{reportData.incidentiles}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>PT - (namaPt): </span>
                                                <span className="font-semibold text-green-600">{formatCurrency(reportData.foTotalIncome)}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}