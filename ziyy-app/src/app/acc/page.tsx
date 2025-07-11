"use client";

import { CirclePlus, ChevronsRight, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Page() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [txPaymentMethod, setTxPaymentMethod] = useState("");
    const [txPaymentAmount, setTxPaymentAmount] = useState("");
    const [txDate, setTxDate] = useState("");

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-t-2xl px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer z-10" onClick={() => router.push("/home")}>
                            <Undo2 className="text-white/80 hover:text-white transition-all"/>
                        </div>
                        <h2 className="text-white font-semibold text-xl tracking-tight absolute left-1/2 -translate-x-1/2 z-0">
                            Ziyy Gym | Accounting
                        </h2>
                        <div className="z-10">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/home" className="text-white/80 hover:text-white transition-all">
                                            Home
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white">Accounting</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-8 pb-8">
                        <Link href="/acc/tx-weekly">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-center">Pemasukan</CardTitle>
                                    <CardDescription className="text-center">Minggu ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">Rp2.400.000</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/acc/tx-weekly">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-center">Pengeluaran</CardTitle>
                                    <CardDescription className="text-center">Minggu ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">Rp2.400.000</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/acc/tx-monthly">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-center">Pemasukan</CardTitle>
                                    <CardDescription className="text-center">Bulan ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">Rp2.400.000</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/acc/tx-monthly">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-center">Pengeluaran</CardTitle>
                                    <CardDescription className="text-center">Bulan ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">Rp2.400.000</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Card className="flex flex-col justify-between bg-white py-6 px-2">
                            <CardHeader>
                                    <CardTitle className="text-center">Total Kas</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center">Rp22.400.000</p>
                                </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 pb-8">
                        <Link href="/acc/tx-list">
                            <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle>Daftar Transaksi</CardTitle>
                                </CardHeader>
                                <CardContent></CardContent>
                                <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                    <ChevronsRight className="text-[#7bb3d6]"/>
                                        <p className="text-md">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Card className="flex flex-col justify-between bg-white hover:bg-white/90 hover:shadow-lg py-6 px-2 cursor-pointer transition-all" onClick={() => setIsAddDialogOpen(true)}>
                            <CardHeader>
                                <CardTitle>Tambah Transaksi</CardTitle>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="flex-row hover:text-gray-500 gap-2 transition-all">
                                <CirclePlus className="text-[#7bb3d6]"/>
                                <p className="text-md">Tambah</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Tambah Transaksi</DialogTitle>
                                <DialogDescription>Masukkan detail transaksi baru di sini.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="txType" className="text-right">Jenis</Label>
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
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="txTitle" className="text-right">Judul</Label>
                                    <Input id="txTitle" value={txTitle} onChange={e => setTxTitle(e.target.value)} placeholder="Judul Transaksi" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="txNote" className="text-right">Keterangan</Label>
                                    <Input id="txNote" value={txNote} onChange={e => setTxNote(e.target.value)} placeholder="Keterangan" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="txPaymentMethod" className="text-right">Pembayaran</Label>
                                    <Select value={txPaymentMethod} onValueChange={setTxPaymentMethod}>
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
                                    <Label htmlFor="txPaymentAmount" className="text-right">Nominal</Label>
                                    <Input id="txPaymentAmount" type="number" value={txPaymentAmount} onChange={e => setTxPaymentAmount(e.target.value)} placeholder="Nominal Pembayaran" className="col-span-3 w-36" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="txDate" className="text-right">Tanggal</Label>
                                    <Input
                                        id="txDate"
                                        type="date"
                                        value={txDate}
                                        onChange={e => setTxDate(e.target.value)}
                                        className="col-span-3 w-36"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" onClick={() => setIsAddDialogOpen(false)} disabled={!txType || !txTitle || !txPaymentAmount || !txDate}>
                                    Tambah Transaksi
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}