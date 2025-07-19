"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Undo2, Trash2 } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hasFoCrudAccess } from "@/lib/rbac";

// Updated interface to match the API response
interface MemberArrival {
  id: number;
  arrivalDate: string;
  arrivalType: string;
  member: {
    name: string;
  };
}

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  // Permission checks
  const canCreate = session?.user?.role ? hasFoCrudAccess(session.user.role, "CREATE") : false;
  const canRead = session?.user?.role ? hasFoCrudAccess(session.user.role, "READ") : false;
  const canUpdate = session?.user?.role ? hasFoCrudAccess(session.user.role, "UPDATE") : false;
  const canDelete = session?.user?.role ? hasFoCrudAccess(session.user.role, "DELETE") : false;

  const [arrivals, setArrivals] = useState<MemberArrival[]>([]);
  const [selected, setSelected] = useState<MemberArrival | null>(null);
  const [show, setShow] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);

    const fetchArrivals = async () => {
        try{
            const response = await fetch('/api/member-arrivals');
            if(!response.ok){
                throw new Error('Failed to fetch arrivals from DB through API')
            }
            const data = await response.json();
            setArrivals(data);
            // const today = new Date().toISOString().split("T")[0];
            // setArrivals(
            //     data.filter((arrival: MemberArrival) => arrival.arrivalDate && arrival.arrivalDate.split("T")[0] === today)
            // );
        } catch (error) {
            console.error('Error fetching arrivals:', error);
        }
    }

    fetchArrivals();
  }, []);

  const getArrivalBadge = (arrivalType: string) => {
    switch (arrivalType) {
      case "GYM":
        return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">Gym</Badge>;
      case "GYM_PT":
        return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">Gym + PT</Badge>;
    }
  };

    const handleClick = (a: MemberArrival) => {
        setSelected(a);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteArrival = async () => {
        if(selected){
            try {
                const response = await fetch('/api/member-arrivals', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: selected.id }),
                });

                if (!response.ok) {
                    throw new Error("Failed to delete arrival");
                }

                const updated = arrivals.filter(
                    (arr) => arr.id !== selected.id
                );
                setArrivals(updated);
                setIsDeleteDialogOpen(false);

            } catch (error) {
                console.error("Error deleting arrival:", error);
            }
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
      <div className={`w-full py-8 px-8 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
          <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
            {/* Left: Back Button - Fixed Width */}
            <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-32 justify-start" onClick={() => router.push("/fo")}>
                <Undo2 className="w-4 h-4 transition-all" />
                <span className="hidden sm:inline transition-all">Back</span>
            </div>
            
            {/* Center: Title - Takes remaining space and centers content */}
            <div className="flex-1 flex justify-center">
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight text-center">
                    Ziyy Gym
                </h2>
            </div>
            
            {/* Right: Breadcrumb - Fixed Width to match left side */}
            <div className="w-32 flex justify-end">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                FO
                            </BreadcrumbLink>
                            <BreadcrumbSeparator></BreadcrumbSeparator>
                            <BreadcrumbPage className="text-white text-sm md:text-base">Kedatangan</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 pb-8 px-8">
            {arrivals.length === 0 && (
              <p className="text-gray-500 col-span-full text-center">Tidak ada kedatangan member.</p>
            )}
            {arrivals.sort((a, b) => b.id - a.id).map((arrival) => (
              <Card key={arrival.id} className="bg-white justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="flex items-center gap-2">
                        {arrival.member.name}
                    </CardTitle>
                    {canDelete && (
                    <Trash2 className="text-xs hover:cursor-pointer" onClick={() => handleClick(arrival)}/>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-gray-500">Tanggal: {new Date(arrival.arrivalDate).toLocaleDateString()}</div>
                  <div className="text-xs text-gray-500">{getArrivalBadge(arrival.arrivalType)}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Trash2 className="h-5 w-5" />
                                Hapus Kedatangan
                            </DialogTitle>
                            <DialogDescription>
                                Apakah anda yakin ingin menghapus kedatangan member ini? Tindakan ini tidak dapat dibatalkan.
                            </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex gap-2">
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 hover:cursor-pointer"
                            onClick={() => setIsDeleteDialogOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            className="flex items-center gap-2 hover:cursor-pointer"
                            onClick={handleDeleteArrival}
                        >
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
      </div>
    </div>
  );
}