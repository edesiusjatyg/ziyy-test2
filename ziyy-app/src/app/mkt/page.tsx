import { CirclePlus, ChevronsRight } from "lucide-react";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[70%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">Ziyy Gym | Marketing</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>
                                        Marketing
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <p className="text-black font-semibold text-xl pl-6 pt-6">Rabu, 11 Juni 2025</p>

                    <div className="grid grid-cols-2 gap-6 p-6">
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Campaign Aktif</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">2</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Total Aktivitas</CardTitle>
                                <CardDescription>Hari ini</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">3</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pl-6 pr-6 pb-6 pt-0">
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Daftar Campaign</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 p-6 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Catat Aktivitas</CardTitle>
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