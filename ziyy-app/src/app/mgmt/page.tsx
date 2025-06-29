"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TrafficCone, Construction, Undo2, Dot } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Page() {
    const [show, setShow] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setShow(true);
    }, []);

    // Animated blinking dots state
    const dotCount = 5;
    const [activeDot, setActiveDot] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDot((prev) => (prev + 1) % dotCount);
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/home")}>
                            <Undo2 className="text-gray-400 hover:text-gray-500 transition-all"/>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex flex-row items-center justify-center gap-4">
                            {[...Array(dotCount)].map((_, i) => (
                                <Dot
                                    key={i}
                                    className={`w-16 h-16 mt-4 transition-all duration-1000 ${activeDot === i ? "opacity-100" : "opacity-10"}`}
                                />
                            ))}
                        </div>
                        <h3 className="text-sm text-gray-500 text-center mt-4">This page is under construction.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}