"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Undo2, Users, Cog, BookText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Page() {
    const [show, setShow] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-24 justify-start" onClick={() => router.push("/home")}>
                            <Undo2 className="w-4 h-4 transition-all" />
                            <span className="hidden sm:inline transition-all">Back</span>
                        </div>
                        <div className="flex-1 text-center">
                            <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight">
                                Ziyy Gym
                            </h2>
                        </div>
                        <div className="w-24 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/home" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                            Home
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Management</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8 px-8">
                        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => router.push('/mgmt/reports')}>
                            <CardHeader className="flex flex-col items-center justify-center">
                                <CardTitle className="text-xl font-semibold">Reports</CardTitle>
                                <BookText className="w-20 h-36 text-[#629dc9] stroke-1" />
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-gray-600">Lihat laporan bulanan</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => router.push('/mgmt/staff')}>
                            <CardHeader className="flex flex-col items-center justify-center">
                                <CardTitle className="text-xl font-semibold">Staff Gym</CardTitle>
                                <Users className="w-20 h-36 text-[#629dc9] stroke-1" />
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-gray-600">Lihat dan kelola staff</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}