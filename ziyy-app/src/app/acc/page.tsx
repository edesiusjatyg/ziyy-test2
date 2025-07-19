"use client";

import { CirclePlus, ChevronsRight, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { hasAccCrudAccess } from "@/lib/rbac";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/lib/format";

interface Transaction {
    id: number;
    type: 'PEMASUKAN' | 'PENGELUARAN';
    title: string;
    note?: string;
    paymentMethod: string;
    paymentAmount: number;
    date: string;
}

export default function Page() {
    const router = useRouter();
    const { data: session } = useSession();

    // Permission checks
    const canCreate = session?.user?.role ? hasAccCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasAccCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasAccCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasAccCrudAccess(session.user.role, "DELETE") : false;

    const [show, setShow] = useState(false);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [txPaymentMethod, setTxPaymentMethod] = useState("");
    const [txPaymentAmount, setTxPaymentAmount] = useState("");
    const [txDate, setTxDate] = useState("");

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
        loadTransactions();
    }, []);

    const loadTransactions = async () => {
        try {
            const response = await fetch('/api/transaction-accounting');
            if (response.ok) {
                const data = await response.json();
                setTransactions(data);
            }
        } catch (error) {
            console.error('Error fetching transactions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddTransaction = async () => {
        if (!txType || !txTitle || !txPaymentAmount || !txDate) return;

        try {
            const response = await fetch('/api/transaction-accounting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: txType.toUpperCase(),
                    title: txTitle,
                    note: txNote || null,
                    paymentMethod: txPaymentMethod,
                    paymentAmount: parseInt(txPaymentAmount),
                    date: new Date(txDate).toISOString(),
                }),
            });

            if (response.ok) {
                loadTransactions(); // Reload data
                setIsAddDialogOpen(false);
                // Clear form
                setTxType("");
                setTxTitle("");
                setTxNote("");
                setTxPaymentMethod("");
                setTxPaymentAmount("");
                setTxDate("");
            }
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    // Calculate statistics
    const getWeeklyStats = () => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        const weeklyTransactions = transactions.filter(tx => 
            new Date(tx.date) >= oneWeekAgo
        );
        
        const income = weeklyTransactions
            .filter(tx => tx.type === 'PEMASUKAN')
            .reduce((sum, tx) => sum + tx.paymentAmount, 0);
        
        const expense = weeklyTransactions
            .filter(tx => tx.type === 'PENGELUARAN')
            .reduce((sum, tx) => sum + tx.paymentAmount, 0);
        
        return { income, expense };
    };

    const getMonthlyStats = () => {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        
        const monthlyTransactions = transactions.filter(tx => 
            new Date(tx.date) >= oneMonthAgo
        );
        
        const income = monthlyTransactions
            .filter(tx => tx.type === 'PEMASUKAN')
            .reduce((sum, tx) => sum + tx.paymentAmount, 0);
        
        const expense = monthlyTransactions
            .filter(tx => tx.type === 'PENGELUARAN')
            .reduce((sum, tx) => sum + tx.paymentAmount, 0);
        
        return { income, expense };
    };

    const getTotalCash = () => {
        const totalIncome = transactions
            .filter(tx => tx.type === 'PEMASUKAN')
            .reduce((sum, tx) => sum + tx.paymentAmount, 0);
        
        const totalExpense = transactions
            .filter(tx => tx.type === 'PENGELUARAN')
            .reduce((sum, tx) => sum + tx.paymentAmount, 0);
        
        return totalIncome - totalExpense;
    };

    const weeklyStats = getWeeklyStats();
    const monthlyStats = getMonthlyStats();
    const totalCash = getTotalCash();

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
                        {/* Left: Back Button - Fixed Width */}
                        <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-24 justify-start" onClick={() => router.push("/home")}>
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
                        <div className="w-24 flex justify-end">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/home" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                            Home
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white text-sm md:text-base">Accounting</BreadcrumbPage>
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
                                    {loading?
                                        <p className="text-center text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        </p> : 
                                        <p className="text-center">
                                            {formatCurrency(weeklyStats.income)}
                                        </p>
                                    }
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
                                    {loading?
                                        <p className="text-center text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        </p> : 
                                        <p className="text-center">
                                            {formatCurrency(weeklyStats.expense)}
                                        </p>
                                    }
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
                                    {loading?
                                        <p className="text-center text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        </p> : 
                                        <p className="text-center">
                                            {formatCurrency(monthlyStats.income)}
                                        </p>
                                    }
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
                                    {loading?
                                        <p className="text-center text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        </p> : 
                                        <p className="text-center">
                                            {formatCurrency(monthlyStats.expense)}
                                        </p>
                                    }
                                </CardContent>
                            </Card>
                        </Link>
                        <Card className="flex flex-col justify-between bg-white py-6 px-2">
                            <CardHeader>
                                    <CardTitle className="text-center">Total Kas</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading?
                                        <p className="text-center text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                                        </p> : 
                                        <p className="text-center">
                                            {formatCurrency(totalCash)}
                                        </p>
                                    }
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
                        {canCreate && (
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
                        )}
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
                                            <SelectItem value="CASH">Cash</SelectItem>
                                            <SelectItem value="TRANSFER">Transfer</SelectItem>
                                            <SelectItem value="DEBIT_BRI">Debit BRI</SelectItem>
                                            <SelectItem value="QRIS_BRI">QRIS BRI</SelectItem>
                                            <SelectItem value="DEBIT_MANDIRI">Debit Mandiri</SelectItem>
                                            <SelectItem value="QRIS_MANDIRI">QRIS Mandiri</SelectItem>
                                            <SelectItem value="EDC_MANDIRI">EDC Mandiri</SelectItem>
                                            <SelectItem value="TRANSFER_MANDIRI">Transfer Mandiri</SelectItem>
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
                                <Button type="submit" onClick={handleAddTransaction} disabled={!txType || !txTitle || !txPaymentAmount || !txDate}>
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