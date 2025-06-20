"use client"

import { useState, useEffect } from "react";
import { CirclePlus, ChevronsRight, Edit, Trash2, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Transaction = {
    id: number;
    txType: string;
    txTitle: string;
    txNote: string;
    itemType: string;
    itemAmount: string;
    paymentAmount: string;
    paymentMethod: string;
};

export default function Page() {
    const [mockTx, setMockTx] = useState<Transaction[]>([]);
    const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [txItemAmount, setTxItemAmount] = useState("");
    const [txItemType, setTxItemType] = useState("");
    const [txPaymentAmount, setTxPaymentAmount] = useState("");
    const [txPaymentMethod, setTxPaymentMethod] = useState("");

    useEffect(() => {
        const fetchTxs = async () => {
            try {
                const response = await fetch('/txCanteen.json');
                const data = await response.json();

                const incomeTx = data.txCanteen.filter((tx: Transaction) => {
                    return tx.txType === "pemasukan";
                });

                setMockTx(incomeTx);
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        };

        fetchTxs();
    }, []);

    const handleTxClick = (tx: Transaction) => {
        setSelectedTx(tx);
        setIsDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedTx) {
            setTxTitle(selectedTx.txTitle);
            setTxNote(selectedTx.txNote);
            setTxItemAmount(selectedTx.itemAmount);
            setTxItemType(selectedTx.itemType);
            setTxPaymentAmount(selectedTx.paymentAmount);
            setTxPaymentMethod(selectedTx.paymentMethod);
            setIsEditDialogOpen(true);
        }
    };

    const handleSaveEdit = () => {
        if (selectedTx) {
            selectedTx.txTitle = txTitle;
            selectedTx.txNote = txNote;
            selectedTx.paymentAmount = txPaymentAmount;
            selectedTx.paymentMethod = txPaymentMethod;
            for(let i = 0; i < mockTx.length; i++) {
                if (mockTx[i].id === selectedTx.id) {
                    mockTx[i] = selectedTx;
                    break;
                }
            }
            setIsEditDialogOpen(false);
        }
    };

    const handleDeleteTx = () => {
        if(selectedTx){
            const updatedTx = mockTx.filter(
                (tx) => tx.id !== selectedTx.id
            );

            setMockTx(updatedTx);
            setIsDeleteDialogOpen(false);
            setIsDialogOpen(false);
        }
    };

    const getItemBadge = (itemType: string) => {
        if (itemType === "cleoKecil") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Cleo Kecil</Badge>;
        } else if (itemType === "cleoSedang") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Cleo Sedang</Badge>;
        } else if (itemType === "cleoBesar") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Cleo Besar</Badge>;
        } else if (itemType === "bcaa") {
            return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">BCAA</Badge>;
        } else if (itemType === "creatine") {
            return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">Creatine</Badge>;
        } else if (itemType === "protein") {
            return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">Whey Protein</Badge>;
        } else if (itemType === "hilo") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Hilo</Badge>;
        } else if (itemType === "tropicana") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Tropicana</Badge>;
        } else if (itemType === "americano") {
            return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Americano</Badge>;
        } else if (itemType === "latte") {
            return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Latte</Badge>;
        }
    }

    const getPaymentMethodBadge = (paymentMethod: string) => {
        if (paymentMethod === "cash") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Cash</Badge>;
        } else if (paymentMethod === "transfer") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Transfer</Badge>;
        } else if (paymentMethod === "debitBri") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Debit BRI</Badge>;
        } else if (paymentMethod === "qrisBri") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">QRIS BRI</Badge>;
        } else if (paymentMethod === "debitMdr") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Debit Mandiri</Badge>;
        } else if (paymentMethod === "qrisMdr") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">QRIS Mandiri</Badge>;
        } else if (paymentMethod === "edcMdr") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">EDC Mandiri</Badge>;
        } else if (paymentMethod === "transferMdr") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Transfer Mandiri</Badge>;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[90%] max-w-6xl">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                    <h2 className="text-black font-semibold text-xl">
                        Ziyy Gym | Canteen
                    </h2>
                    <Breadcrumb>
                        <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                            href="/"
                            className="text-gray-600 hover:text-gray-900"
                            >
                            Home
                            </BreadcrumbLink>
                            <BreadcrumbSeparator></BreadcrumbSeparator>
                            <BreadcrumbLink
                            href="/canteen"
                            className="text-gray-600 hover:text-gray-900"
                            >
                            Canteen
                            </BreadcrumbLink>
                            <BreadcrumbSeparator></BreadcrumbSeparator>
                            <BreadcrumbPage>Penjualan</BreadcrumbPage>
                        </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-black font-semibold text-xl">
                            Rabu, 11 Juni 2025
                            </p>
                        </div>

                        <Card>
                            <CardHeader>
                            <CardTitle>Penjualan Hari ini</CardTitle>
                            <CardDescription>
                                Klik pada penjualan untuk melihat detailnya.
                            </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <Table>
                                <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead>Qty</TableHead>
                                    <TableHead>Nominal</TableHead>
                                </TableRow>
                                </TableHeader>
                                <TableBody>
                                {mockTx.map((tx) => (
                                    <TableRow
                                    key={tx.id}
                                    className="cursor-pointer hover:bg-gray-50"
                                    onClick={() => handleTxClick(tx)}
                                    >
                                    <TableCell>{getItemBadge(tx.itemType)}</TableCell>
                                    <TableCell>{tx.itemAmount}</TableCell>
                                    <TableCell className="font-semibold">{tx.paymentAmount}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Transaction Details
                    </DialogTitle>
                    <DialogDescription>
                        Informasi detail tentang transaksi.
                    </DialogDescription>
                    </DialogHeader>

                    {selectedTx && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="text-sm font-medium text-gray-600">
                                    Item 
                                </Label>
                                <p className="text-sm font-semibold">{selectedTx.itemType}</p>
                            </div>

                            <div>
                                <Label className="text-sm font-medium text-gray-600">
                                    Qty
                                </Label>
                                <p className="text-sm font-semibold">{selectedTx.itemAmount}</p>
                            </div>
                            
                            <div>
                                <Label className="text-sm font-medium text-gray-600">
                                    Jumlah 
                                </Label>
                                <p className="text-sm font-semibold">{selectedTx.paymentAmount}</p>
                            </div>

                            <div>
                                <Label className="text-sm font-medium text-gray-600">
                                    Pembayaran 
                                </Label>
                                <p className="text-sm font-semibold">{getPaymentMethodBadge(selectedTx.paymentMethod)}</p>
                            </div>
                            </div>
                        </div>
                    )}

                    <DialogFooter className="flex gap-2">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:cursor-pointer"
                        onClick={handleEditClick}
                    >
                        <Edit className="h-4 w-4" />
                        Edit
                    </Button>
                    <Button
                        variant="destructive"
                        className="flex items-center gap-2 hover:cursor-pointer"
                        onClick={() => {
                        setIsDeleteDialogOpen(true);
                        }}
                    >
                        <Trash2 className="h-4 w-4" />
                        Delete
                    </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Trash2 className="h-5 w-5" />
                        Delete Transaction
                    </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this transaction?
                    </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex gap-2">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:cursor-pointer"
                        onClick={() => {
                        setIsDeleteDialogOpen(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="destructive"
                        className="flex items-center gap-2 hover:cursor-pointer"
                        onClick={handleDeleteTx}
                    >
                        Continue
                    </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Edit className="h-5 w-5" />
                            Edit Transaction
                        </DialogTitle>
                        <DialogDescription>Edit transaction information.</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="txTitle" className="text-right">
                                Judul
                            </Label>
                            <Input
                                id="txTitle"
                                value={txTitle}
                                onChange={(e) => setTxTitle(e.target.value)}
                                placeholder="-"
                                className="col-span-3"
                            />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="txNote" className="text-right">
                                Keterangan
                            </Label>
                            <Input
                                id="txNote"
                                value={txNote}
                                onChange={(e) => setTxNote(e.target.value)}
                                placeholder="-"
                                className="col-span-3"
                            />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="txPaymentAmount" className="text-right">
                                Jumlah
                            </Label>
                            <Input
                                id="txPaymentAmount"
                                value={txPaymentAmount}
                                onChange={(e) => setTxPaymentAmount(e.target.value)}
                                placeholder="-"
                                className="col-span-3"
                            />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="txPaymentMethod" className="text-right">
                                Pembayaran
                            </Label>
                            <Select value={txPaymentMethod} onValueChange={setTxPaymentMethod}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder={txPaymentMethod}/>
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
                        </div>
                    </div>

                    <DialogFooter className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setIsEditDialogOpen(false);
                            }}
                            className="flex items-center gap-2 hover:cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="default"
                            onClick={() => {
                                handleSaveEdit();
                            }}
                            className="flex items-center gap-2 hover:cursor-pointer"
                        >
                            Save
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog> */}
        </div>
    );
}