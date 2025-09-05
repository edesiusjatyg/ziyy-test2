"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Undo2, Users, User, Cog, BookText, Trash, Pencil } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogDescription, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Staff {
    id: number;
    username: string | null;
    name: string | null;
    email: string | null;
    role: string;
    lastLogin: Date | null;
    createdAt: Date;
}

export default function Page() {
    const [show, setShow] = useState(false);
    const [staffs, setStaffs] = useState<Staff[]>([]);
    const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
    const [staffDialogOpen, setStaffDialogOpen] = useState(false);
    const [addStaffDialogOpen, setAddStaffDialogOpen] = useState(false);
    const [editStaffDialogOpen, setEditStaffDialogOpen] = useState(false);
    const [deleteStaffDialogOpen, setDeleteStaffDialogOpen] = useState(false);

    const [staffName, setStaffName] = useState("");
    const [staffEmail, setStaffEmail] = useState("");
    const [staffRole, setStaffRole] = useState("");
    const [staffPassword, setStaffPassword] = useState("");
    const [staffUsername, setStaffUsername] = useState("");
    const [staffLastLogin, setStaffLastLogin] = useState("");
    const router = useRouter();

    const clearFormState = () => {
        setStaffName("");
        setStaffEmail("");
        setStaffUsername("");
        setStaffPassword("");
        setStaffRole("");
        setStaffLastLogin("");
        setSelectedStaff(null);
    };

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
    }, []);

    useEffect(() => {
        loadStaffData();
    }, []);

    const loadStaffData = async () => {
        try{
            const response = await fetch('/api/users');
            if (!response.ok) {
                throw new Error('Failed to fetch staff data');
            }
            const data = await response.json();
            setStaffs(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleStaffClick = (staff: Staff) => {
        console.log("Entering staff click handler")
        setSelectedStaff(staff);
        setStaffName(staff.name || "");
        setStaffEmail(staff.email || "");
        setStaffUsername(staff.username || "");
        setStaffRole(staff.role);
        setStaffLastLogin(
            staff.lastLogin 
                ? new Date(staff.lastLogin).toLocaleString('id-ID', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                : "Belum pernah login"
        );
        setStaffDialogOpen(true);
    }

    const handleStaffKick = (staff: Staff) => {
        console.log("Entering staff kick handler")
        // Call API to kick staff (log out)
        fetch(`/api/users/${staff.id}/kick`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            if (!res.ok) throw new Error('Failed to kick staff');
            // Optionally update UI, e.g. remove staff from online list
            // Show feedback
            alert(`Staff ${staff.name} has been kicked (logged out).`);
        })
        .catch(err => {
            alert(`Failed to kick staff: ${err.message}`);
        });
    }

    const handleAddStaff = async () => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: staffName,
                    email: staffEmail,
                    username: staffUsername,
                    password: staffPassword,
                    role: staffRole,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add staff');
            }

            const newStaff = await response.json();
            setStaffs([...staffs, newStaff]);
            setAddStaffDialogOpen(false);
            clearFormState();
        } catch (error) {
            console.error(error);
        }
    }

    const handleEditStaff = async () => {
        if (!selectedStaff) return;

        try {
            const response = await fetch(`/api/users/${selectedStaff.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: staffName,
                    email: staffEmail,
                    username: staffUsername,
                    role: staffRole,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update staff');
            }

            const updatedStaff = await response.json();
            setStaffs(staffs.map(staff => staff.id === updatedStaff.id ? updatedStaff : staff));
            setEditStaffDialogOpen(false);
            clearFormState();
        } catch (error) {
            console.error(error);
        }
    }

    const handleDeleteStaff = async () => {
        if (!selectedStaff) return;

        try {
            const response = await fetch(`/api/users`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: selectedStaff.id }),
            });

            if (!response.ok) {
                throw new Error('Failed to delete staff');
            }

            setStaffs(staffs.filter(staff => staff.id !== selectedStaff.id));
            setStaffDialogOpen(false);
            setDeleteStaffDialogOpen(false);
            clearFormState();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-24 justify-start" onClick={() => router.push("/mgmt")}>
                            <Undo2 className="w-4 h-4 transition-all" />
                            <span className="hidden sm:inline transition-all">Back</span>
                        </div>
                        <div className="flex-1 text-center">
                            <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight">
                                Staff Management
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pb-4 px-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="md:text-lg">Staff List</CardTitle>
                                <Users className="h-4 w-4 md:h-5 md:w-5" />
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-48 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {staffs.map(staff => (
                                            <Card key={staff.id} className="hover:shadow-lg transition-all duration-300 justify-between cursor-pointer" onClick={() => handleStaffClick(staff)}>
                                                <CardHeader>
                                                    <div className="flex justify-between items-center">
                                                        <CardTitle className="text-sm font-semibold">{staff.name}</CardTitle>
                                                        <User className="w-4 h-4" />
                                                    </div>
                                                    <CardDescription className="text-xs text-gray-500">{staff.role}</CardDescription>
                                                </CardHeader>
                                                <CardFooter>
                                                    <div className="flex justify-center items-center w-full">
                                                        <Button className="cursor-pointer" variant="outline" onClick={() => handleStaffKick(staff)}>
                                                            Kick (Log out)
                                                        </Button>
                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 pb-8">
                        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => setAddStaffDialogOpen(true)}>
                            <CardHeader className="flex flex-col items-center justify-center">
                                <CardTitle className="text-lg">Tambah Staff</CardTitle>
                                <Users className="w-20 h-36 text-[#629dc9] stroke-1" />
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-gray-600">Buat anggota staff baru</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <CardHeader className="flex flex-col items-center justify-center">
                                <CardTitle className="text-lg">Riwayat Staff</CardTitle>
                                <Cog className="w-20 h-36 text-[#629dc9] stroke-1" />
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-gray-600">Lihat riwayat aktivitas staff</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Dialog open={staffDialogOpen} onOpenChange={(open) => {
                        setStaffDialogOpen(open);
                        if (!open) clearFormState();
                    }}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Detail Staff</DialogTitle>
                                <DialogDescription>Informasi lengkap tentang {selectedStaff?.name}</DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                <div className="items-center space-y-2">
                                    <Label className="text-left">Nama</Label>
                                    <Label className="font-normal">{staffName}</Label>
                                </div>
                                <div className="items-center space-y-2">
                                    <Label className="text-left">Email</Label>
                                    <Label className="font-normal">{staffEmail}</Label>
                                </div>
                                <div className="items-center space-y-2">
                                    <Label className="text-left">Username</Label>
                                    <Label className="font-normal">{staffUsername}</Label>
                                </div>
                                <div className="items-center space-y-2">
                                    <Label className="text-left">Role</Label>
                                    <Label className="font-normal">{staffRole}</Label>
                                </div>
                                <div className="items-center space-y-2">
                                    <Label className="text-left">Login Terakhir</Label>
                                    <Label className="font-normal">{staffLastLogin}</Label>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button className="cursor-pointer" variant="outline" onClick={() => setEditStaffDialogOpen(true)}><Pencil /> Edit</Button>
                                <Button className="cursor-pointer" variant="destructive" onClick={() => setDeleteStaffDialogOpen(true)}><Trash /> Hapus</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Dialog open={addStaffDialogOpen} onOpenChange={(open) => {
                        setAddStaffDialogOpen(open);
                        if (!open) clearFormState();
                    }}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Tambah Staff Baru</DialogTitle>
                                <DialogDescription>Masukkan detail staff baru</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="staffName" className="text-left">
                                        Nama
                                    </Label>
                                    <Input id="staffName" value={staffName} onChange={(e) => setStaffName(e.target.value)} placeholder="Nama asli staff" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="staffEmail" className="text-left">
                                        Email
                                    </Label>
                                    <Input id="staffEmail" value={staffEmail} onChange={(e) => setStaffEmail(e.target.value)} placeholder="Email staff (Opsional)" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="staffUsername" className="text-left">
                                        Username
                                    </Label>
                                    <Input id="staffUsername" value={staffUsername} onChange={(e) => setStaffUsername(e.target.value)} placeholder="Username staff" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="staffPassword" className="text-left">
                                        Password
                                    </Label>
                                    <Input id="staffPassword" value={staffPassword} onChange={(e) => setStaffPassword(e.target.value)} placeholder="Password staff" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="staffRole" className="text-left">
                                        Role
                                    </Label>
                                    <Select value={staffRole} onValueChange={setStaffRole}>
                                        <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Pilih Role Staff" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ADMIN">Admin</SelectItem>
                                            <SelectItem value="SUPERVISOR">Supervisor</SelectItem>
                                            <SelectItem value="FRONT_OFFICE">Front Office</SelectItem>
                                            <SelectItem value="CANTEEN">Kantin</SelectItem>
                                            <SelectItem value="ACCOUNTING">Accounting</SelectItem>
                                            <SelectItem value="MARKETING">Marketing</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button className="cursor-pointer" type="submit" onClick={() => handleAddStaff()}>Tambah</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Dialog open={editStaffDialogOpen} onOpenChange={(open) => {
                        setEditStaffDialogOpen(open);
                        if (!open) clearFormState();
                    }}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Staff</DialogTitle>
                                <DialogDescription>Edit detail {selectedStaff?.name}</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="editStaffName" className="text-left">
                                        Nama
                                    </Label>
                                    <Input id="editStaffName" value={selectedStaff?.name || ""} onChange={(e) => setStaffName(e.target.value)} placeholder="Nama staff" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="editStaffEmail" className="text-left">
                                        Email
                                    </Label>
                                    <Input id="editStaffEmail" value={selectedStaff?.email || ""} onChange={(e) => setStaffEmail(e.target.value)} placeholder="Email staff (Opsional)" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="editStaffUsername" className="text-left">
                                        Username
                                    </Label>
                                    <Input id="editStaffUsername" value={selectedStaff?.username || ""} onChange={(e) => setStaffUsername(e.target.value)} placeholder="Username staff" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="editStaffRole" className="text-left">
                                        Role
                                    </Label>
                                    <Select value={selectedStaff?.role || ""} onValueChange={(value) => setStaffRole(value)}>
                                        <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Pilih Role Staff" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ADMIN">Admin</SelectItem>
                                            <SelectItem value="SUPERVISOR">Supervisor</SelectItem>
                                            <SelectItem value="FRONT_OFFICE">Front Office</SelectItem>
                                            <SelectItem value="CANTEEN">Kantin</SelectItem>
                                            <SelectItem value="ACCOUNTING">Accounting</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button className="cursor-pointer" type="submit" onClick={() => handleEditStaff()}>Simpan</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Dialog open={deleteStaffDialogOpen} onOpenChange={(open) => {
                        setDeleteStaffDialogOpen(open);
                        if (!open) clearFormState();
                    }}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Hapus Staff</DialogTitle>
                                <DialogDescription>Apakah Anda yakin ingin menghapus {selectedStaff?.name}?</DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button className="cursor-pointer" variant="destructive" onClick={handleDeleteStaff}><Trash /> Hapus</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}