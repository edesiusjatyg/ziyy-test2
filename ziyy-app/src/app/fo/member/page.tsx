import { CirclePlus, ChevronsRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[70%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">Ziyy Gym | Member</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbLink href="/fo" className="text-gray-600 hover:text-gray-900">
                                        FO
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>
                                        Member
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-5 gap-6 p-6">
                        <Link href={"/fo/member"}>
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                                <CardHeader>
                                    <CardTitle>Member</CardTitle>
                                    <CardDescription>Total Member</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">178</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500">
                                    <ChevronsRight />
                                    <p className="text-md font-semibold">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Member</CardTitle>
                                <CardDescription>Member Baru</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">9</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Member</CardTitle>
                                <CardDescription>Mendekati Habis</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">23</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Pemasukan</CardTitle>
                                <CardDescription>Hari ini</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">Rp2.400.000</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Pengeluaran</CardTitle>
                                <CardDescription>Hari ini</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">Rp400.000</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pl-6 pr-6 pb-6">
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Absensi Member</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500 gap-2">
                                <CirclePlus />
                                <p className="text-md font-semibold">Tambah</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Tambah Member</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500 gap-2">
                                <CirclePlus />
                                <p className="text-md font-semibold">Tambah</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Tambah Transaksi</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500 gap-2">
                                <CirclePlus />
                                <p className="text-md font-semibold">Tambah</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}