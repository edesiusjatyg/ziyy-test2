import { CirclePlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[90%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">Front Office</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>
                                        FO
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <p className="text-black font-semibold text-xl pl-6 pt-6">Rabu, 11 Juni 2025</p>

                    <div className="grid grid-cols-5 gap-6 p-6">
                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Total Member</h2>
                                <h3 className="text-xl font-semibold">200</h3>
                            </div>
                        </Card>

                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Member Baru</h2>
                                <h3 className="text-xl font-semibold">9</h3>
                            </div>
                        </Card>

                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Member Mendekati Habis</h2>
                                <h3 className="text-xl font-semibold">23</h3>
                            </div>
                        </Card>

                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Pemasukan Hari ini</h2>
                                <h3 className="text-xl font-semibold">Rp2.400.000</h3>
                            </div>
                        </Card>

                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Pengeluaran Hari ini</h2>
                                <h3 className="text-xl font-semibold">Rp400.000</h3>
                            </div>
                        </Card>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pl-6 pr-6 pb-6">
                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Absensi Member</h2>
                                <CirclePlus />
                            </div>
                        </Card>

                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Tambah Member</h2>
                                <CirclePlus />
                            </div>
                        </Card>

                        <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <div className="flex flex-col items-left justify-center space-y-4">
                                <h2 className="text-xl font-semibold">Tambah Transaksi</h2>
                                <CirclePlus />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}