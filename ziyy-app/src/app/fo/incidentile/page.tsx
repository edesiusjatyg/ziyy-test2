"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Undo2, Trash2, Edit, ChevronsRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

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
  const [incidentiles, setIncidentiles] = useState<Incidentile[]>([]);
  const [selectedIncidentile, setSelectedIncidentile] = useState<Incidentile | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editIncidentile, setEditIncidentile] = useState<Incidentile | null>(null);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    fetch("/incidentile.json")
      .then((res) => res.json())
      .then((data) => setIncidentiles(data.incidentile || []));
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

  const handleSaveEdit = () => {
    if (editIncidentile) {
      setIncidentiles((prev) =>
        prev.map((item) => (item.id === editIncidentile.id ? editIncidentile : item))
      );
      setIsEditDialogOpen(false);
      setSelectedIncidentile(editIncidentile);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteIncidentile = () => {
    if (selectedIncidentile) {
      setIncidentiles((prev) => prev.filter((item) => item.id !== selectedIncidentile.id));
      setIsDeleteDialogOpen(false);
      setIsDialogOpen(false);
      setSelectedIncidentile(null);
    }
  };

  const getTypeBadge = (type: string, clas: string) => {
    switch (type) {
      case "gym": return <Badge className="bg-sky-100 text-sky-800">Gym</Badge>;
      case "kelas":
        switch (clas) {
            case "zumba": return <Badge className="bg-green-100 text-green-800">Kelas Zumba</Badge>;
            case "poundFit": return <Badge className="bg-green-100 text-green-800">Kelas Pound Fit</Badge>;
            case "bodyFat": return <Badge className="bg-green-100 text-green-800">Kelas Body Fat</Badge>;
            case "yoga": return <Badge className="bg-green-100 text-green-800">Kelas Yoga</Badge>;
            case "aerobic": return <Badge className="bg-green-100 text-green-800">Kelas Aerobic</Badge>;
            case "muayThai": return <Badge className="bg-green-100 text-green-800">Kelas Muay Thai</Badge>;
        }
      case "pt": return <Badge className="bg-yellow-100 text-yellow-800">PT</Badge>;
      case "sauna": return <Badge className="bg-orange-100 text-orange-800">Sauna</Badge>;
      default: return null;
    }
  };

  const getDialogTypeBadge = (type: string) => {
    switch (type) {
      case "gym": return <Badge className="bg-sky-100 text-sky-800">Gym</Badge>;
      case "kelas": return <Badge className="bg-green-100 text-green-800">Kelas</Badge>;
      case "pt": return <Badge className="bg-yellow-100 text-yellow-800">PT</Badge>;
      case "sauna": return <Badge className="bg-orange-100 text-orange-800">Sauna</Badge>;
      default: return null;
    }
  };

  const getDialogClassBadge = (clas: string) => {
    switch (clas) {
        case "zumba": return <Badge className="bg-green-100 text-green-800">Kelas Zumba</Badge>;
        case "poundFit": return <Badge className="bg-green-100 text-green-800">Kelas Pound Fit</Badge>;
        case "bodyFat": return <Badge className="bg-green-100 text-green-800">Kelas Body Fat</Badge>;
        case "yoga": return <Badge className="bg-green-100 text-green-800">Kelas Yoga</Badge>;
        case "aerobic": return <Badge className="bg-green-100 text-green-800">Kelas Aerobic</Badge>;
        case "muayThai": return <Badge className="bg-green-100 text-green-800">Kelas Muay Thai</Badge>;
    }
  };

  const getPaymentMethodBadge = (paymentMethod: string) => {
    if (paymentMethod === "cash") {
      return (
        <Badge className="bg-green-100 text-green-800">
          Cash
        </Badge>
      );
    } else if (paymentMethod === "transfer") {
      return (
        <Badge className="bg-green-100 text-green-800">
          Transfer
        </Badge>
      );
    } else if (paymentMethod === "debitBri") {
      return (
        <Badge className="bg-orange-100 text-orange-800">
          Debit BRI
        </Badge>
      );
    } else if (paymentMethod === "qrisBri") {
      return (
        <Badge className="bg-orange-100 text-orange-800">
          QRIS BRI
        </Badge>
      );
    } else if (paymentMethod === "debitMdr") {
      return (
        <Badge className="bg-indigo-100 text-indigo-800">
          Debit Mandiri
        </Badge>
      );
    } else if (paymentMethod === "qrisMdr") {
      return (
        <Badge className="bg-indigo-100 text-indigo-800">
          QRIS Mandiri
        </Badge>
      );
    } else if (paymentMethod === "edcMdr") {
      return (
        <Badge className="bg-indigo-100 text-indigo-800">
          EDC Mandiri
        </Badge>
      );
    } else if (paymentMethod === "transferMdr") {
      return (
        <Badge className="bg-indigo-100 text-indigo-800">
          Transfer Mandiri
        </Badge>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
      <div className={`w-full py-8 px-8 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between rounded-t-2xl px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
            <div className="flex items-center gap-2 cursor-pointer z-10" onClick={() => router.push("/fo")}> <Undo2 className="text-white/80 hover:text-white transition-all"/> </div>
            <h2 className="text-white font-semibold text-xl tracking-tight absolute left-1/2 -translate-x-1/2 z-0">Ziyy Gym | Insidentil</h2>
            <div className="z-10">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all">FO</BreadcrumbLink>
                    <BreadcrumbSeparator></BreadcrumbSeparator>
                    <BreadcrumbPage className="text-white">Insidentil</BreadcrumbPage>
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
                    <div className="text-xs text-gray-500">Tanggal: {incidentile.date}</div>
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
                      <p className="text-sm">{selectedIncidentile.date}</p>
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
                <Button variant="outline" onClick={handleEditClick} className="flex items-center gap-2 hover:cursor-pointer"><Edit className="h-4 w-4" />Edit</Button>
                <Button variant="destructive" onClick={handleDeleteClick} className="flex items-center gap-2 hover:cursor-pointer"><Trash2 className="h-4 w-4" />Delete</Button>
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
                      <Input id="editDate" className="col-span-3" value={editIncidentile.date} onChange={e => setEditIncidentile({ ...editIncidentile, date: e.target.value })} />
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