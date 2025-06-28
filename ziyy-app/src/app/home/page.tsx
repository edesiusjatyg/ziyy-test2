"use client";

import { useEffect, useState } from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { FolderOpen, MapPinned, Briefcase, DollarSign, Coffee } from "lucide-react";
import Link from "next/link";

export default function Page() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className="w-full max-w-3xl transition-all duration-500" style={{ opacity: show ? 1 : 0}}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-6" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-6" style={{ background: '#7bb3d6' }}>
                        <h2 className="text-white font-semibold text-xl tracking-tight">Ziyy Gym</h2>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        <Link href="/fo">
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer min-h-[120px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-2 p-4">
                                    <FolderOpen className="w-8 h-8" style={{ color: '#7bb3d6' }} />
                                    <p className="text-center text-base font-medium text-gray-800">Front Office</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/canteen">
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer min-h-[120px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-2 p-4">
                                    <Coffee className="w-8 h-8" style={{ color: '#7bb3d6' }} />
                                    <p className="text-center text-base font-medium text-gray-800">Kantin</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/acc">
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer min-h-[120px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-2 p-4">
                                    <DollarSign className="w-8 h-8" style={{ color: '#7bb3d6' }} />
                                    <p className="text-center text-base font-medium text-gray-800">Accounting</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/mkt">
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer min-h-[120px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-2 p-4">
                                    <MapPinned className="w-8 h-8" style={{ color: '#7bb3d6' }} />
                                    <p className="text-center text-base font-medium text-gray-800">Marketing</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/mgmt">
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer min-h-[120px] flex items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-2 p-4">
                                    <Briefcase className="w-8 h-8" style={{ color: '#7bb3d6' }} />
                                    <p className="text-center text-base font-medium text-gray-800">Management</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}