"use client"

import { useState } from "react";
import { CirclePlus, ChevronsRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
    const [isAbsDialogOpen, setIsAbsDialogOpen] = useState(false);
    const [isAddMemberDialogOpen, setIsAddMemberDialogOpen] = useState(false);
    const [isAddTxDialogOpen, setIsAddTxDialogOpen] = useState(false);

    const [memberName, setMemberName] = useState("");
    const [coupleName, setCoupleName] = useState("");
    const [memberNik, setMemberNik] = useState("");
    const [coupleNik, setCoupleNik] = useState("");
    const [memberTelp, setMemberTelp] = useState("");
    const [coupleTelp, setCoupleTelp] = useState("");
    const [memberType, setMemberType] = useState("");
    const [memberDuration, setMemberDuration] = useState("");
    const [absenceType, setAbsenceType] = useState("");

    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [txIncomeType, setTxIncomeType] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const [pertemuanAmount, setPertemuanAmount] = useState("");

    const handleAbsenceSubmit = () => {
        console.log("Member Name:", memberName);
        console.log("Absence Type:", absenceType);
        
        setMemberName("");
        setAbsenceType("");
        setIsAbsDialogOpen(false);
    };

    const handleAddMemberSubmit = () => {
        console.log("Member Name:", memberName);
        console.log("Member NIK:", memberNik);
        console.log("Member Telp:", memberTelp);
        console.log("Couple Name:", coupleName);
        console.log("Couple NIK:", coupleNik);
        console.log("Couple Telp:", coupleTelp);
        console.log("Member Type:", memberType);
        console.log("Member Duration:", memberDuration);
        console.log("Payment Amount:", paymentAmount);
        console.log("Payment Method:", paymentMethod);
        
        setMemberName("");
        setCoupleName("");
        setMemberNik("");
        setCoupleNik("");
        setMemberTelp("");
        setCoupleTelp("");
        setMemberType("");
        setMemberDuration("");
        setPaymentAmount("");
        setPaymentMethod("");
        setIsAddMemberDialogOpen(false);
    };

    const handleAddTxSubmit = () => {
        console.log("Transaction Type:", txType);
        if(txType === "pemasukan") {
            console.log("Member Name:", memberName);
            console.log("Payment Type:", txIncomeType);
            if(txIncomeType === "paketPt" || "paketKelas"){
                console.log("Pertemuan Amount:", pertemuanAmount);
            }
            console.log("Payment Amount:", paymentAmount);
            console.log("Payment Method:", paymentMethod);
        }else {
            console.log("Transaction Title: ", txTitle);
            console.log("Transaction Note: ", txNote);
            console.log("Payment Amount:", paymentAmount);
            console.log("Payment Method:", paymentMethod);
        }
        
        setTxType("");
        setTxIncomeType("");
        setTxTitle("");
        setTxNote("");
        setMemberName("");
        setPaymentAmount("");
        setPaymentMethod("");
        setPertemuanAmount("");
        setIsAddTxDialogOpen(false);
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[70%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">Ziyy Gym | Front Office</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>
                                        FO
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <p className="text-black font-semibold text-xl pl-6 pt-6">Rabu, 11 Juni 2025</p>

                    <div className="grid grid-cols-5 gap-6 p-6">
                        <Link href={"/fo/member"}>
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                <CardHeader>
                                    <CardTitle>Member</CardTitle>
                                    <CardDescription>Total Member</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">178</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500">
                                    <ChevronsRight />
                                    <p className="text-md font-semibold">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        
                        <Link href={"/fo/member-new"}>
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                <CardHeader>
                                    <CardTitle>Member</CardTitle>
                                    <CardDescription>Member Baru</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">9</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500">
                                    <ChevronsRight />
                                    <p className="text-md font-semibold">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        
                        <Link href={"/fo/member-near-exp"}>
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                <CardHeader>
                                    <CardTitle>Member</CardTitle>
                                    <CardDescription>Mendekati Habis</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">23</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500">
                                    <ChevronsRight />
                                    <p className="text-md font-semibold">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        
                        <Link href={"/fo/tx-income"}>
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                <CardHeader>
                                    <CardTitle>Pemasukan</CardTitle>
                                    <CardDescription>Hari ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp2.400.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500">
                                    <ChevronsRight />
                                    <p className="text-md font-semibold">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>

                        <Link href={"/fo/tx-expense"}>
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                <CardHeader>
                                    <CardTitle>Pengeluaran</CardTitle>
                                    <CardDescription>Hari ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp400.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500">
                                    <ChevronsRight />
                                    <p className="text-md font-semibold">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link> 
                    </div>

                    <div className="grid grid-cols-3 gap-6 pl-6 pr-6 pb-6">
                        <Dialog open={isAbsDialogOpen} onOpenChange={setIsAbsDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle>Absensi Member</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2">
                                        <CirclePlus />
                                        <p className="text-md font-semibold">Tambah</p>
                                    </CardFooter>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Tambah Absensi Member</DialogTitle>
                                    <DialogDescription>
                                        Masukkan detail absensi member di sini.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberName" className="text-right">
                                            Nama
                                        </Label>
                                        <Input id="memberName" value={memberName} onChange={(e) => setMemberName(e.target.value)} placeholder="Nama Lengkap Member" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="absenceType" className="text-right">
                                            Tipe Absensi
                                        </Label>
                                        <Select value={absenceType} onValueChange={setAbsenceType}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Pilih Tipe Absensi" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="gym">Gym</SelectItem>
                                                <SelectItem value="gym_pt">Gym + PT</SelectItem>
                                                <SelectItem value="kelas">Kelas</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit" onClick={handleAbsenceSubmit} disabled={!memberName || !absenceType}>
                                        Tambah Absensi
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Dialog open={isAddMemberDialogOpen} onOpenChange={setIsAddMemberDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle>Tambah Member Baru</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2">
                                        <CirclePlus />
                                        <p className="text-md font-semibold">Tambah</p>
                                    </CardFooter>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Tambah Member Baru</DialogTitle>
                                    <DialogDescription>
                                        Masukkan detail member baru di sini.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberName" className="text-right">
                                            Nama
                                        </Label>
                                        <Input id="memberName" value={memberName} onChange={(e) => setMemberName(e.target.value)} placeholder="Nama Lengkap Member" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberNik" className="text-right">
                                            NIK
                                        </Label>
                                        <Input id="memberNik" value={memberNik} onChange={(e) => setMemberNik(e.target.value)} placeholder="NIK Member" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberTelp" className="text-right">
                                            No Telp
                                        </Label>
                                        <Input id="memberTelp" value={memberTelp} onChange={(e) => setMemberTelp(e.target.value)} placeholder="No Telp" className="col-span-3" />
                                    </div>
                                    <div hidden={!(memberType === "couple")} className="grid gap-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="coupleName" className="text-right">
                                                Nama
                                            </Label>
                                            <Input id="coupleName" value={coupleName} onChange={(e) => setCoupleName(e.target.value)} placeholder="Nama Lengkap Couple" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="coupleNik" className="text-right">
                                                NIK
                                            </Label>
                                            <Input id="coupleNik" value={coupleNik} onChange={(e) => setCoupleNik(e.target.value)} placeholder="NIK Couple" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="coupleTelp" className="text-right">
                                                No Telp
                                            </Label>
                                            <Input id="coupleTelp" value={coupleTelp} onChange={(e) => setCoupleTelp(e.target.value)} placeholder="No Telp" className="col-span-3" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberType" className="text-right">
                                            Tipe
                                        </Label>
                                        <Select value={memberType} onValueChange={setMemberType}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Pilih Tipe Member" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="personal">Personal</SelectItem>
                                                <SelectItem value="couple">Couple</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberDuration" className="text-right">
                                            Durasi
                                        </Label>
                                        <Select value={memberDuration} onValueChange={setMemberDuration}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Pilih Durasi Member" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">1 Bulan</SelectItem>
                                                <SelectItem value="3">3 Bulan</SelectItem>
                                                <SelectItem value="6">6 Bulan</SelectItem>
                                                <SelectItem value="7">6 Bulan + 1 Free</SelectItem>
                                                <SelectItem value="12">12 Bulan</SelectItem>
                                                <SelectItem value="15">12 Bulan + 3 Free</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="paymentMethod" className="text-right">
                                            Pembayaran
                                        </Label>
                                        <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Pilih Metode Pembayaran" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="cash">Cash</SelectItem>
                                                <SelectItem value="transfer">Transfer</SelectItem>
                                                <SelectItem value="debitBri">Debit BRI</SelectItem>
                                                <SelectItem value="qrisMdr">QRIS BRI</SelectItem>
                                                <SelectItem value="debitMdr">Debit Mandiri</SelectItem>
                                                <SelectItem value="qrisMdr">QRIS Mandiri</SelectItem>
                                                <SelectItem value="edcMdr">EDC Mandiri</SelectItem>
                                                <SelectItem value="transferMdr">Transfer Mandiri</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="paymentAmount" className="text-right">
                                            Jumlah
                                        </Label>
                                        <Input id="paymentAmount" type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Jumlah Pembayaran" className="w-[50%] col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit" onClick={handleAddMemberSubmit} disabled={!paymentAmount}>
                                        Tambah Member
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Dialog open={isAddTxDialogOpen} onOpenChange={setIsAddTxDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle>Tambah Transaksi</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2">
                                        <CirclePlus />
                                        <p className="text-md font-semibold">Tambah</p>
                                    </CardFooter>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Tambah Transaksi</DialogTitle>
                                    <DialogDescription>Masukkan detail transaksi di sini.</DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="txType" className="text-right">
                                            Transaksi
                                        </Label>
                                        <Select value={txType} onValueChange={setTxType}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Pilih Jenis Transaksi" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="pemasukan">Pemasukan</SelectItem>
                                                <SelectItem value="pengeluaran">Pengeluaran</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div hidden={!(txType === "pemasukan")} className="grid gap-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberName" className="text-right">Nama</Label>
                                            <Input id="memberName" value={memberName} onChange={(e) => setMemberName(e.target.value)} placeholder="Nama Lengkap Member" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="txIncomeType" className="text-right">Jenis</Label>
                                            <Select value={txIncomeType} onValueChange={setTxIncomeType}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih Jenis Pemasukan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="insidentilGym">Insidentil Gym</SelectItem>
                                                    <SelectItem value="insidentilPt">Insidentil PT</SelectItem>
                                                    <SelectItem value="insidentilKelas">Insidentil Kelas</SelectItem>
                                                    <SelectItem value="perpanjangMember">Perpanjang Member Gym</SelectItem>
                                                    <SelectItem value="paketPt">Paket PT</SelectItem>
                                                    <SelectItem value="paketKelas">Paket Kelas</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div hidden={!(txIncomeType === "paketPt" || txIncomeType === "paketKelas")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="pertemuanAmount" className="text-right">Pertemuan</Label>
                                            <Input type="number" id="pertemuanAmount" value={pertemuanAmount} onChange={(e) => setPertemuanAmount(e.target.value)} placeholder="Jumlah Pertemuan" className="w-[30%] col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentMethod" className="text-right">
                                                Pembayaran
                                            </Label>
                                            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih Metode Pembayaran" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cash">Cash</SelectItem>
                                                    <SelectItem value="transfer">Transfer</SelectItem>
                                                    <SelectItem value="debitBri">Debit BRI</SelectItem>
                                                    <SelectItem value="qrisBri">QRIS BRI</SelectItem>
                                                    <SelectItem value="debitMdr">Debit Mandiri</SelectItem>
                                                    <SelectItem value="qrisMdr">QRIS Mandiri</SelectItem>
                                                    <SelectItem value="edcMdr">EDC Mandiri</SelectItem>
                                                    <SelectItem value="transferMdr">Transfer Mandiri</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentAmount" className="text-right">
                                                Jumlah
                                            </Label>
                                            <Input id="paymentAmount" type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Jumlah Pembayaran" className="w-[50%] col-span-3" />
                                        </div>
                                    </div>
                                    <div hidden={!(txType === "pengeluaran")} className="grid gap-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="txTitle" className="text-right">Judul</Label>
                                            <Input id="txTitle" value={txTitle} onChange={(e) => setTxTitle(e.target.value)} placeholder="Judul Pengeluaran" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="txNote" className="text-right">Keterangan</Label>
                                            <Input id="txNote" value={txNote} onChange={(e) => setTxNote(e.target.value)} placeholder="Keterangan Pengeluaran" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentMethod" className="text-right">
                                                Pembayaran
                                            </Label>
                                            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih Metode Pembayaran" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cash">Cash</SelectItem>
                                                    <SelectItem value="transfer">Transfer</SelectItem>
                                                    <SelectItem value="debitBri">Debit BRI</SelectItem>
                                                    <SelectItem value="qrisBri">QRIS BRI</SelectItem>
                                                    <SelectItem value="debitMdr">Debit Mandiri</SelectItem>
                                                    <SelectItem value="qrisMdr">QRIS Mandiri</SelectItem>
                                                    <SelectItem value="edcMdr">EDC Mandiri</SelectItem>
                                                    <SelectItem value="transferMdr">Transfer Mandiri</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentAmount" className="text-right">
                                                Jumlah
                                            </Label>
                                            <Input id="paymentAmount" type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Jumlah Pembayaran" className="w-[50%] col-span-3" />
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit" onClick={handleAddTxSubmit} disabled={!paymentAmount}>
                                        Tambah Transaksi
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}