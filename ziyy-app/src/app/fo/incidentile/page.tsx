"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Undo2, Trash2, Edit, ChevronsRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { set } from "date-fns";
import { hasFoCrudAccess } from "@/lib/rbac";

interface Incidentile {
  id: string;
  name: string;
  type: string;
  class: string;
  pt: boolean;
  sauna: boolean;
  date: string;
  paymentMethod: string;
  paymentAmount: number;
}

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  // Permission checks
  const canCreate = session?.user?.role ? hasFoCrudAccess(session.user.role, "CREATE") : false;
  const canRead = session?.user?.role ? hasFoCrudAccess(session.user.role, "READ") : false;
  const canUpdate = session?.user?.role ? hasFoCrudAccess(session.user.role, "UPDATE") : false;
  const canDelete = session?.user?.role ? hasFoCrudAccess(session.user.role, "DELETE") : false;

  const [incidentiles, setIncidentiles] = useState<Incidentile[]>([]);
  const [selectedIncidentile, setSelectedIncidentile] = useState<Incidentile | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editIncidentile, setEditIncidentile] = useState<Incidentile | null>(null);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);

    const fetchIncidentiles = async () => {
            try {
                const response = await fetch('/api/incidentile');
                if(!response.ok){
                    throw new Error('Failed to fetch incidentiles from DB through API')
                }
                const data = await response.json();
                setIncidentiles(data);
            } catch (error) {
                console.error('Error fetching incidentiles:', error);
            }
        };

        fetchIncidentiles();
  }, []);

  const handleIncidentileClick = (incidentile: Incidentile) => {
    setSelectedIncidentile(incidentile);
    setIsDialogOpen(true);
  };

  const handleEditClick = () => {
    if (selectedIncidentile) {
      setEditIncidentile({ ...selectedIncidentile });
      setIsEditDialogOpen(true);
    }
  };

  const handleSaveEdit = async () => {
    if (editIncidentile) {
        try {
            const response = await fetch('/api/incidentile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editIncidentile),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to update incidentile');
            }

            const updatedIncidentile = await response.json();
            setIncidentiles(incidentiles.map(inc => inc.id === updatedIncidentile.id ? updatedIncidentile : inc));

            setIsEditDialogOpen(false);
            setIsDialogOpen(false);
            setEditIncidentile(null);
            setSelectedIncidentile(updatedIncidentile);
        } catch (error) {
            console.error('Error saving edit:', error);
        }
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteIncidentile = async () => {
    if (selectedIncidentile) {
        try {
            const response = await fetch('/api/incidentile', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: selectedIncidentile.id }),
            });

            if (!response.ok) {
                throw new Error('Failed to delete incidentile');
            }

            setIsDeleteDialogOpen(false);
            setIsDialogOpen(false);
            setSelectedIncidentile(null);
        } catch (error) {
            console.error('Error deleting incidentile:', error);
        }
    }
};

  const getTypeBadge = (type: string, clas: string) => {
    switch (type) {
      case "GYM": return <Badge className="bg-sky-100 text-sky-800">Gym</Badge>;
      case "KELAS":
        switch (clas) {
            case "ZUMBA": return <Badge className="bg-green-100 text-green-800">Kelas Zumba</Badge>;
            case "POUND_FIT": return <Badge className="bg-green-100 text-green-800">Kelas Pound Fit</Badge>;
            case "BODY_FAT": return <Badge className="bg-green-100 text-green-800">Kelas Body Fat</Badge>;
            case "YOGA": return <Badge className="bg-green-100 text-green-800">Kelas Yoga</Badge>;
            case "AEROBIC": return <Badge className="bg-green-100 text-green-800">Kelas Aerobic</Badge>;
            case "MUAY_THAI": return <Badge className="bg-green-100 text-green-800">Kelas Muay Thai</Badge>;
            case "STRONG_NATION": return <Badge className="bg-green-100 text-green-800">Kelas Strong Nation</Badge>;
        }
      case "PT": return <Badge className="bg-yellow-100 text-yellow-800">PT</Badge>;
      case "SAUNA": return <Badge className="bg-orange-100 text-orange-800">Sauna</Badge>;
      default: return null;
    }
  };

  const getDialogTypeBadge = (type: string) => {
    switch (type) {
      case "GYM": return <Badge className="bg-sky-100 text-sky-800">Gym</Badge>;
      case "KELAS": return <Badge className="bg-green-100 text-green-800">Kelas</Badge>;
      case "PT": return <Badge className="bg-yellow-100 text-yellow-800">PT</Badge>;
      case "SAUNA": return <Badge className="bg-orange-100 text-orange-800">Sauna</Badge>;
      default: return null;
    }
  };

  const getDialogClassBadge = (clas: string) => {
    switch (clas) {
        case "ZUMBA": return <Badge className="bg-green-100 text-green-800">Kelas Zumba</Badge>;
        case "POUND_FIT": return <Badge className="bg-green-100 text-green-800">Kelas Pound Fit</Badge>;
        case "BODY_FAT": return <Badge className="bg-green-100 text-green-800">Kelas Body Fat</Badge>;
        case "YOGA": return <Badge className="bg-green-100 text-green-800">Kelas Yoga</Badge>;
        case "AEROBIC": return <Badge className="bg-green-100 text-green-800">Kelas Aerobic</Badge>;
        case "MUAY_THAI": return <Badge className="bg-green-100 text-green-800">Kelas Muay Thai</Badge>;
        case "STRONG_NATION": return <Badge className="bg-green-100 text-green-800">Kelas Strong Nation</Badge>;
        default: return null;
    }
  };

  const getPaymentMethodBadge = (paymentMethod: string) => {
    switch (paymentMethod) {
      case "CASH": return <Badge className="bg-green-100 text-green-800">Cash</Badge>;
      case "TRANSFER": return <Badge className="bg-green-100 text-green-800">Transfer</Badge>;
      case "DEBIT_BRI": return <Badge className="bg-orange-100 text-orange-800">Debit BRI</Badge>;
      case "QRIS_BRI": return <Badge className="bg-orange-100 text-orange-800">QRIS BRI</Badge>;
      case "DEBIT_MANDIRI": return <Badge className="bg-indigo-100 text-indigo-800">Debit Mandiri</Badge>;
      case "QRIS_MANDIRI": return <Badge className="bg-indigo-100 text-indigo-800">QRIS Mandiri</Badge>;
      case "EDC_MANDIRI": return <Badge className="bg-indigo-100 text-indigo-800">EDC Mandiri</Badge>;
      case "TRANSFER_MANDIRI": return <Badge className="bg-indigo-100 text-indigo-800">Transfer Mandiri</Badge>;
      default: return null;
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
                    <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all text-sm md:text-base">FO</BreadcrumbLink>
                    <BreadcrumbSeparator></BreadcrumbSeparator>
                    <BreadcrumbPage className="text-white text-sm md:text-base">Insidentil</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-8 pb-8">
            {incidentiles.length === 0 && (
              <p className="text-gray-500 col-span-full text-center">Tidak ada data insidentil.</p>
            )}
            {incidentiles.sort((a, b) => Number(b.id) - Number(a.id)).map((incidentile) => (
              <Card key={incidentile.id} className="cursor-pointer hover:shadow-lg transition-shadow bg-white" onClick={() => handleIncidentileClick(incidentile)}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">{incidentile.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>{getTypeBadge(incidentile.type, incidentile.class)}</div>
                    <div className="text-xs text-gray-500">Tanggal: {incidentile.date.split("T")[0]}</div>
                    <div className="text-xs text-gray-500">Nominal: Rp {incidentile.paymentAmount.toLocaleString()}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 justify-end">
                  <ChevronsRight className="text-[#7bb3d6] h-4 w-4" />
                  <p className="text-sm">Detail</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">Detail Insidentil</DialogTitle>
                <DialogDescription>Informasi detail tentang insidentil.</DialogDescription>
              </DialogHeader>
              {selectedIncidentile && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Nama</span>
                      <p className="text-sm font-semibold">{selectedIncidentile.name}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Tanggal</span>
                      <p className="text-sm">{selectedIncidentile.date.split("T")[0]}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Jenis</span>
                      <p className="text-sm">{getDialogTypeBadge(selectedIncidentile.type)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Kelas</span>
                      <p className="text-sm">{getDialogClassBadge(selectedIncidentile.class) || '-'}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">PT</span>
                      <p className="text-sm">{selectedIncidentile.pt ? 'Ya' : '-'}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Sauna</span>
                      <p className="text-sm">{selectedIncidentile.sauna ? 'Ya' : '-'}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Metode</span>
                      <p className="text-sm font-semibold">{getPaymentMethodBadge(selectedIncidentile.paymentMethod)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Nominal</span>
                      <p className="text-sm">Rp {selectedIncidentile.paymentAmount.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter className="flex gap-2">
                {canUpdate && (
                <Button variant="outline" onClick={handleEditClick} className="flex items-center gap-2 hover:cursor-pointer"><Edit className="h-4 w-4" />Edit</Button>
                )}
                {canDelete && (
                <Button variant="destructive" onClick={handleDeleteClick} className="flex items-center gap-2 hover:cursor-pointer"><Trash2 className="h-4 w-4" />Delete</Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">Edit Insidentil</DialogTitle>
                <DialogDescription>Edit data insidentil.</DialogDescription>
              </DialogHeader>
              {editIncidentile && (
                <div className="space-y-4">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="editName" className="text-left">Nama</Label>
                      <Input id="editName" className="col-span-3" value={editIncidentile.name} onChange={e => setEditIncidentile({ ...editIncidentile, name: e.target.value })} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="editDate" className="text-left">Tanggal</Label>
                      <Input id="editDate" className="col-span-3" value={editIncidentile.date.split("T")[0]} onChange={e => setEditIncidentile({ ...editIncidentile, date: e.target.value })} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="editNominal" className="text-left">Nominal</Label>
                      <Input id="editNominal" className="col-span-3" type="number" value={editIncidentile.paymentAmount} onChange={e => setEditIncidentile({ ...editIncidentile, paymentAmount: Number(e.target.value) })} />
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter className="flex gap-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="flex items-center gap-2 hover:cursor-pointer">Cancel</Button>
                <Button variant="default" onClick={handleSaveEdit} className="flex items-center gap-2 hover:cursor-pointer">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2"><Trash2 className="h-5 w-5" />Hapus Insidentil</DialogTitle>
                <DialogDescription>Apakah anda yakin ingin menghapus insidentil ini?</DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex gap-2">
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} className="flex items-center gap-2 hover:cursor-pointer">Cancel</Button>
                <Button variant="destructive" onClick={handleDeleteIncidentile} className="flex items-center gap-2 hover:cursor-pointer">Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}