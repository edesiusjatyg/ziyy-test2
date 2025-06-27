"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CirclePlus, ChevronsRight, Undo2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

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
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className="w-full max-w-2xl py-4 md:py-8">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/home")}>
                            <Undo2 className="text-white/80 hover:text-white transition-all"/>
                        </div>
                        <h2 className="text-white font-semibold text-xl tracking-tight">Ziyy Gym | Kantin</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/home" className="text-white/80 hover:text-white transition-all">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                    <BreadcrumbPage className="text-white">Kantin</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6">
                        <Link href="/canteen/tx-income">
                            <Card className="flex flex-col justify-between bg-white hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle>Pemasukan</CardTitle>
                                    <CardDescription>Hari ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp2.400.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                    <ChevronsRight className="text-[#7bb3d6]"/>
                                    <p className="text-md">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Link href="/canteen/tx-expense">
                            <Card className="flex flex-col justify-between bg-white hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle>Pengeluaran</CardTitle>
                                    <CardDescription>Hari ini</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">Rp400.000</p>
                                </CardContent>
                                <CardFooter className="flex-row hover:text-gray-500 transition-all">
                                    <ChevronsRight className="text-[#7bb3d6]"/>
                                    <p className="text-md">Detail</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <Dialog open={isAddTxDialogOpen} onOpenChange={setIsAddTxDialogOpen}>
                            <DialogTrigger asChild>
                                <Card className="flex flex-col justify-between bg-white hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                    <CardHeader>
                                        <CardTitle>Tambah Transaksi</CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                    <CardFooter className="flex-row hover:text-gray-500 gap-2 transition-all">
                                        <CirclePlus className="text-[#7bb3d6]"/>
                                        <p className="text-md">Tambah</p>
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
                                            <Input id="paymentAmount" type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Jumlah Pembayaran" className="w-32 col-span-3" />
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