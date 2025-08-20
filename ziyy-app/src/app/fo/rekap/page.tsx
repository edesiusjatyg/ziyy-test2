"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, CalendarIcon, Undo2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
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

    const handleGenerateReport = () => {
        if (startDate && endDate) {
            console.log('Selected date range:', { startDate, endDate });
            // TODO: Add report generation logic here
        }
    };

    const handleReset = () => {
        setStartDate(undefined);
        setEndDate(undefined);
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-2xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-32 justify-start" onClick={() => router.push("/fo")}>
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

                    <div className="pb-8 px-8">
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
                                    disabled={!startDate || !endDate}
                                    className="flex-1 cursor-pointer"
                                >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Lihat Report
                                </Button>
                                {(startDate || endDate) && (
                                    <Button variant="outline" onClick={handleReset} className="cursor-pointer">
                                        Reset
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}