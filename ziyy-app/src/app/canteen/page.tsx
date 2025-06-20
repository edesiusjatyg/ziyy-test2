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
    const [isAddTxDialogOpen, setIsAddTxDialogOpen] = useState(false);
    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [itemType, setItemType] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const handleAddTxSubmit = () => {
        console.log("Transaction Type:", txType);
        if(txType === "pemasukan") {
            console.log("Item Type:", itemType);
            console.log("Item Amount:", itemAmount);
            console.log("Payment Amount:", paymentAmount);
            console.log("Payment Method:", paymentMethod);
        }else {
            console.log("Transaction Title: ", txTitle);
            console.log("Transaction Note: ", txNote);
            console.log("Payment Amount:", paymentAmount);
            console.log("Payment Method:", paymentMethod);
        }
        
        setTxType("");
        setTxTitle("");
        setTxNote("");
        setItemType("");
        setItemAmount("");
        setPaymentAmount("");
        setPaymentMethod("");
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
                        <Link href={"/canteen/sales"}>
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
                        </Link>

                        <Link href={"/canteen/tx-income"}>
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
                        
                        <Link href={"/canteen/tx-expense"}>
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
                                            <Label htmlFor="itemType" className="text-right">Item</Label>
                                            <Select value={itemType} onValueChange={setItemType}>
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
                                            <Label htmlFor="itemAmount" className="text-right">Jumlah Item</Label>
                                            <Input type="number" id="itemAmount" value={itemAmount} onChange={(e) => setItemAmount(e.target.value)} placeholder="Jumlah Item" className="w-32 col-span-3" />
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