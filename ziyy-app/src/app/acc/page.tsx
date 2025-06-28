"use client";

import { CirclePlus, ChevronsRight, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className="w-full max-w-6xl py-4 md:py-8">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/home")}>
                            <Undo2 className="text-white/80 hover:text-white transition-all"/>
                        </div>
                        <h2 className="text-white font-semibold text-xl tracking-tight">Ziyy Gym | Accounting</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/home" className="text-white/80 hover:text-white transition-all">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage className="text-white">Accounting</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        <Link href="/acc/tx-income">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle>Pemasukan</CardTitle>
                                    <CardDescription>Hari ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp2.400.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                    <ChevronsRight className="text-[#7bb3d6]"/>
                                    <p className="text-md">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Link href="/acc/tx-expense">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle>Pengeluaran</CardTitle>
                                    <CardDescription>Hari ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp400.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                    <ChevronsRight className="text-[#7bb3d6]"/>
                                    <p className="text-md">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Link href="/acc/tx-income-monthly">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle>Pemasukan</CardTitle>
                                    <CardDescription>Bulan ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp12.800.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                    <ChevronsRight className="text-[#7bb3d6]"/>
                                    <p className="text-md">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Link href="/acc/tx-expense-monthly">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle>Pengeluaran</CardTitle>
                                    <CardDescription>Bulan ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp2.800.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                    <ChevronsRight className="text-[#7bb3d6]"/>
                                    <p className="text-md">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Card className="flex flex-col justify-between bg-white py-6 px-2">
                            <CardHeader>
                                <CardTitle>Total Kas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">Rp22.400.000</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500 transition-all"></CardFooter>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                            <CardHeader>
                                <CardTitle>Daftar Transaksi</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                <ChevronsRight className="text-[#7bb3d6]"/>
                                    <p className="text-md">Detail</p>
                            </CardFooter>
                        </Card>
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                            <CardHeader>
                                <CardTitle>Tambah Transaksi</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500 gap-2 transition-all">
                                <CirclePlus className="text-[#7bb3d6]"/>
                                <p className="text-md">Tambah</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}