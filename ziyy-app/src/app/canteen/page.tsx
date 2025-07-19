"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CirclePlus, ChevronsRight, Undo2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency } from "@/lib/format";
import { hasCanteenCrudAccess } from "@/lib/rbac";
import Link from "next/link";

interface CanteenItem {
    id: number;
    name: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}

interface Transaction {
    id: number;
    type: 'PEMASUKAN' | 'PENGELUARAN';
    title?: string;
    note?: string;
    itemId?: number;
    item?: CanteenItem;
    itemAmount?: number;
    paymentMethod: string;
    paymentAmount: number;
    date: string;
}

export default function Page() {
    const router = useRouter();
    const { data: session } = useSession();

    // Permission checks
    const canCreate = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "DELETE") : false;

    const [isAddTxDialogOpen, setIsAddTxDialogOpen] = useState(false);
    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [itemType, setItemType] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [canteenItems, setCanteenItems] = useState<CanteenItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAddItemDialogOpen, setIsAddItemDialogOpen] = useState(false);
    const [newItemName, setNewItemName] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
        loadData();
    }, []);

    const loadData = async () => {
        try {
            // Fetch canteen items
            const itemsResponse = await fetch('/api/canteen-item');
            if (itemsResponse.ok) {
                const items = await itemsResponse.json();
                setCanteenItems(items);
            }

            // Fetch transactions
            const transactionsResponse = await fetch('/api/transaction-canteen');
            if (transactionsResponse.ok) {
                const transactions: Transaction[] = await transactionsResponse.json();
                
                // Calculate today's totals
                const today = new Date().toISOString().split('T')[0];
                const todayTransactions = transactions.filter(tx => 
                    tx.date.startsWith(today)
                );

                const income = todayTransactions
                    .filter(tx => tx.type === 'PEMASUKAN')
                    .reduce((sum, tx) => sum + tx.paymentAmount, 0);

                const expense = todayTransactions
                    .filter(tx => tx.type === 'PENGELUARAN')
                    .reduce((sum, tx) => sum + tx.paymentAmount, 0);

                setTotalIncome(income);
                setTotalExpense(expense);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setLoading(false);
        }
    };

    // Calculate total amount when item or quantity changes
    useEffect(() => {
        if (txType === "pemasukan" && itemType && itemAmount) {
            const selectedItem = canteenItems.find(item => 
                item.name.toLowerCase() === itemType
            );
            if (selectedItem) {
                const total = selectedItem.price * parseInt(itemAmount);
                setPaymentAmount(total.toString());
            }
        }
    }, [itemType, itemAmount, canteenItems, txType]);

    const handleAddTxSubmit = async () => {
        try {
            const transactionData = {
                type: txType.toUpperCase(),
                paymentMethod: paymentMethod,
                paymentAmount: parseInt(paymentAmount),
                date: new Date().toISOString(),
                ...(txType === "pemasukan" && {
                    title: "Pembelian "+canteenItems.find(item => item.name.toLowerCase() === itemType)?.name,
                    itemId: canteenItems.find(item => item.name.toLowerCase() === itemType)?.id,
                    itemAmount: parseInt(itemAmount) || 1
                }),
                ...(txType === "pengeluaran" && {
                    title: txTitle,
                    note: txNote
                })
            };

            const response = await fetch('/api/transaction-canteen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transactionData),
            });

            if (response.ok) {
                // Reset form
                setTxType("");
                setTxTitle("");
                setTxNote("");
                setItemType("");
                setItemAmount("");
                setPaymentAmount("");
                setPaymentMethod("");
                setIsAddTxDialogOpen(false);
                
                // Reload data
                loadData();
            } else {
                console.error('Failed to create transaction');
            }
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
    }

    const handleAddItemSubmit = async () => {
        try {
            const itemData = {
                name: newItemName,
                price: parseInt(newItemPrice)
            };

            const response = await fetch('/api/canteen-item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemData),
            });

            if (response.ok) {
                // Reset form
                setNewItemName("");
                setNewItemPrice("");
                setIsAddItemDialogOpen(false);
                
                // Reload data
                loadData();
            } else {
                console.error('Failed to create item');
            }
        } catch (error) {
            console.error('Error creating item:', error);
        }
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-2xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-t-2xl px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer z-10" onClick={() => router.push("/home")}>
                            <Undo2 className="text-white/80 hover:text-white transition-all"/>
                        </div>
                        <h2 className="text-white font-semibold text-xl tracking-tight absolute left-1/2 -translate-x-1/2 z-0">
                            Ziyy Gym | Kantin
                        </h2>
                        <div className="z-10">
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-8 pb-8">
                        <Link href="/canteen/tx-income">
                            <Card className="flex flex-col justify-between bg-white hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-center">Pemasukan Hari Ini</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading?
                                        <p className="text-center text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                        </p> : 
                                        <p className="text-center">
                                            {formatCurrency(totalIncome)}
                                        </p>
                                    }
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/canteen/tx-expense">
                            <Card className="flex flex-col justify-between bg-white hover:shadow-lg py-6 px-2 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-center">Pengeluaran Hari Ini</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading?
                                        <p className="text-center text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                        </p> : 
                                        <p className="text-center">
                                            {formatCurrency(totalExpense)}
                                        </p>
                                    }
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 px-8 pb-8">
                        {canCreate && (
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
                                                    {canteenItems.map((item) => (
                                                        <SelectItem key={item.id} value={item.name.toLowerCase()}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))}
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
                                            <Label htmlFor="paymentAmount" className="text-right">
                                                Jumlah
                                            </Label>
                                            <p className="font-semibold text-sm">
                                                {loading ? "Loading..." : formatCurrency(paymentAmount ? parseInt(paymentAmount) : 0)}
                                            </p>
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
                        )}
                    </div>

                    <div className="grid grid-cols-1 gap-6 px-8 pb-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-center">Daftar Menu</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {loading ? (
                                    <p className="text-center text-gray-500">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto">
                                        </div>
                                    </p>
                                ) : (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Item</TableHead>
                                                <TableHead className="text-right">Harga</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {canteenItems.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell className="font-medium">{item.name}</TableCell>
                                                    <TableCell className="text-right">{formatCurrency(item.price)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}