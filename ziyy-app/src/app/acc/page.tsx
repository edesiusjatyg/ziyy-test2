import { CirclePlus, ChevronsRight } from "lucide-react";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[90%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">Ziyy Gym | Accounting</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>
                                        Accounting
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <p className="text-black font-semibold text-xl pl-6 pt-6">Rabu, 11 Juni 2025</p>

                    <div className="grid grid-cols-5 gap-6 p-6">
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

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Pemasukan</CardTitle>
                                <CardDescription>Bulan ini</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">Rp12.800.000</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Pengeluaran</CardTitle>
                                <CardDescription>Bulan ini</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">Rp3.700.000</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white p-6">
                            <CardHeader>
                                <CardTitle>Total Kas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">Rp22.400.000</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 pb-6 pl-88 pr-88">
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Daftar Transaksi</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
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