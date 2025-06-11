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
            <div className="w-[50%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">Ziyy Gym | Kantin</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage>
                                        Kantin
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <p className="text-black font-semibold text-xl pl-6 pt-6">Rabu, 11 Juni 2025</p>

                    <div className="grid grid-cols-3 gap-6 p-6">
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/70 py-6 px-2 cursor-pointer">
                            <CardHeader>
                                <CardTitle>Penjualan</CardTitle>
                                <CardDescription>Hari ini</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">11</p>
                            </CardContent>
                            <CardFooter className="flex-row hover:text-gray-500">
                                <ChevronsRight />
                                <p className="text-md font-semibold">Detail</p>
                            </CardFooter>
                        </Card>

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
                    </div>

                    <div className="grid grid-cols-3 gap-6 pl-6 pr-6 pb-6">
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
                                            <Label htmlFor="txIncomeType" className="text-right">Item</Label>
                                            <Select value={txIncomeType} onValueChange={setTxIncomeType}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih Item" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cleoKecil">Cleo Kecil</SelectItem>
                                                    <SelectItem value="cleoSedang">Cleo Sedang</SelectItem>
                                                    <SelectItem value="cleoBesar">Cleo Besar</SelectItem>
                                                    <SelectItem value="bcaa">BCAA</SelectItem>
                                                    <SelectItem value="protein">Whey Protein</SelectItem>
                                                    <SelectItem value="creatine">Creatine</SelectItem>
                                                    <SelectItem value="hilo">Hilo</SelectItem>
                                                    <SelectItem value="tropicana">Tropicana</SelectItem>
                                                    <SelectItem value="americano">Americano</SelectItem>
                                                    <SelectItem value="latte">latte</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberName" className="text-right">Jumlah Item</Label>
                                            <Input type="number" id="memberName" value={memberName} onChange={(e) => setMemberName(e.target.value)} placeholder="Jumlah Item" className="w-32 col-span-3" />
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