"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { FolderOpen, MapPinned, Briefcase, DollarSign, Coffee, Undo2, LogOut } from "lucide-react";
import Link from "next/link";
import { hasModuleAccess } from "@/lib/rbac";

export default function Page() {
    const [show, setShow] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
    }, []);

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/signin" });
    };

    // Define module configurations with access control
    const modules = [
        {
            key: "fo" as const,
            href: "/fo",
            icon: FolderOpen,
            title: "Front Office",
        },
        {
            key: "canteen" as const,
            href: "/canteen",
            icon: Coffee,
            title: "Kantin",
        },
        {
            key: "acc" as const,
            href: "/acc",
            icon: DollarSign,
            title: "Accounting",
        },
        {
            key: "mkt" as const,
            href: "/mkt",
            icon: MapPinned,
            title: "Marketing",
        },
        {
            key: "mgmt" as const,
            href: "/mgmt",
            icon: Briefcase,
            title: "Management",
        },
    ];

    const accessibleModules = modules.filter(module => 
        session?.user?.role && hasModuleAccess(session.user.role, module.key)
    );

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className="w-full max-w-3xl py-8 px-4 transition-all duration-500" style={{ opacity: show ? 1 : 0}}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-6 relative" style={{ background: '#7bb3d6' }}>
                        {/* Left: Logout Button - Fixed Width */}
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-20 justify-start" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 transition-all" />
                            <span className="hidden sm:inline transition-all">Logout</span>
                        </div>
                        
                        {/* Center: Title - Takes remaining space and centers content */}
                        <div className="flex-1 flex justify-center">
                            <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight text-center">
                                Ziyy Gym
                            </h2>
                        </div>
                        
                        {/* Right: Breadcrumb - Fixed Width */}
                        <div className="w-20 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/" className="text-white/90 hover:text-white font-medium text-sm md:text-base">
                                            Home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-6 px-6">
                        {accessibleModules.length === 0 ? (
                            <div className="col-span-full text-center text-gray-500 py-8">
                                No modules available for your role.
                            </div>
                        ) : (
                            accessibleModules.map((module) => {
                                const IconComponent = module.icon;
                                return (
                                    <Link key={module.key} href={module.href}>
                                        <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer min-h-[120px] flex items-center justify-center">
                                            <CardContent className="flex flex-col items-center justify-center space-y-2 p-4">
                                                <IconComponent className="w-8 h-8" style={{ color: '#7bb3d6' }} />
                                                <p className="text-center text-base font-medium text-gray-800">{module.title}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}