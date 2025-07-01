"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Undo2, Trash2 } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MemberArrival {
  id: number;
  name: string;
  arrivalDate: string;
  arrivalType: string;
}

export default function Page() {
  const router = useRouter();
  const [arrivals, setArrivals] = useState<MemberArrival[]>([]);
  const [selected, setSelected] = useState<MemberArrival | null>(null);
  const [show, setShow] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);

    fetch("/membersArrival.json")
      .then((res) => res.json())
      .then((data) => setArrivals(data.membersArrival || []));
  }, []);

  const getArrivalBadge = (arrivalType: string) => {
    switch (arrivalType) {
      case "gym":
        return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">Gym</Badge>;
      case "gymPt":
        return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">Gym + PT</Badge>;
    }
  };

    const handleClick = (a: MemberArrival) => {
        setSelected(a);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteArrival = () => {
        if(selected){
            const updated = arrivals.filter(
                (arr) => arr.id !== selected.id
            );

            setArrivals(updated);
            setIsDeleteDialogOpen(false);
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
      <div className={`w-full py-8 px-8 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between rounded-t-2xl px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
            <div className="flex items-center gap-2 cursor-pointer z-10" onClick={() => router.push("/fo")}>
                <Undo2 className="text-white/80 hover:text-white transition-all"/>
            </div>
                <h2 className="text-white font-semibold text-xl tracking-tight absolute left-1/2 -translate-x-1/2 z-0">
                    Ziyy Gym | Kedatangan Member
                </h2>
                <div className="z-10">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all">
                                    FO
                                </BreadcrumbLink>
                                <BreadcrumbSeparator></BreadcrumbSeparator>
                                <BreadcrumbPage className="text-white">Kedatangan</BreadcrumbPage>
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
              <Card key={arrival.id} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="flex items-center gap-2">
                      {arrival.name}
                    </CardTitle>
                    <Trash2 className="text-xs hover:cursor-pointer" onClick={() => handleClick(arrival)}/>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-gray-500">Tanggal: {arrival.arrivalDate}</div>
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