import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { FolderOpen, MapPinned, Briefcase, DollarSign, Coffee } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#eaf3fa] flex items-center justify-center font-sans">
            <div className="w-full max-w-5xl">
                <div className="bg-white rounded-3xl shadow-xl p-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between bg-[#6db3e6] rounded-2xl px-8 py-6 mb-8">
                        <h2 className="text-white font-bold text-2xl tracking-tight drop-shadow">Ziyy Gym</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-white/90 hover:text-white font-medium">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <Link href="/fo">
                            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-0 cursor-pointer min-h-[170px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                                    <FolderOpen className="w-12 h-12 text-[#6db3e6]" />
                                    <p className="text-center text-lg font-semibold text-gray-700">Front Office</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/canteen">
                            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-0 cursor-pointer min-h-[170px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                                    <Coffee className="w-12 h-12 text-[#6db3e6]" />
                                    <p className="text-center text-lg font-semibold text-gray-700">Kantin</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/acc">
                            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-0 cursor-pointer min-h-[170px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                                    <DollarSign className="w-12 h-12 text-[#6db3e6]" />
                                    <p className="text-center text-lg font-semibold text-gray-700">Accounting</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/mkt">
                            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-0 cursor-pointer min-h-[170px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                                    <MapPinned className="w-12 h-12 text-[#6db3e6]" />
                                    <p className="text-center text-lg font-semibold text-gray-700">Marketing</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/mgmt">
                            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-0 cursor-pointer min-h-[170px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                                    <Briefcase className="w-12 h-12 text-[#6db3e6]" />
                                    <p className="text-center text-lg font-semibold text-gray-700">Management</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}