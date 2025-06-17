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
    type: string;
    incomeType: string;
    title: string;
    note: string;
    memberName: string;
    paymentAmount: string;
    paymentMethod: string;
    pertemuanAmount: string;
};

export default function Page() {
    const [mockTx, setMockTx] = useState<Transaction[]>([]);
    const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const [txMemberName, setMemberTxName] = useState("");
    const [txIncomeType, setTxIncomeType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [txPaymentAmount, setTxPaymentAmount] = useState("");
    const [txPaymentMethod, setTxPaymentMethod] = useState("");
    const [txPertemuaAnmount, setTxPertemuanAmount] = useState("");

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch('/txFo.json');
                const data = await response.json();

                const incomeTx = data.txFo.filter((tx: Transaction) => {
                    return tx.type === "pemasukan";
                });

                setMockTx(incomeTx);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, []);

    const handleTxClick = (tx: Transaction) => {
        setSelectedTx(tx);
        setIsDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedTx) {
            setMemberTxName(selectedTx.memberName);
            setTxIncomeType(selectedTx.incomeType);
            setTxTitle(selectedTx.title);
            setTxNote(selectedTx.note);
            setTxPaymentAmount(selectedTx.paymentAmount);
            setTxPaymentMethod(selectedTx.paymentMethod);
            setTxPertemuanAmount(selectedTx.pertemuanAmount);
            setIsEditDialogOpen(true);
        }
    };

    const handleSaveEdit = () => {
        if (selectedTx) {
            selectedTx.title = txTitle;
            selectedTx.note = txNote;
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

    const getIncomeTypeBadge = (incomeType: string) => {
        if (incomeType === "insidentilGym") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Gym (Insidentil)</Badge>;
        } else if (incomeType === "insidentilPt") {
            return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">PT (Insidentil)</Badge>;
        } else if (incomeType === "insidentilKelas") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Kelas (Insidentil)</Badge>;
        } else if (incomeType === "perpanjangMember") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Perpanjang Member</Badge>;
        } else if (incomeType === "paketPt") {
            return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Paket PT</Badge>;
        } else if (incomeType === "paketKelas") {
            return <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Paket Kelas</Badge>;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[90%] max-w-6xl">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                    <h2 className="text-black font-semibold text-xl">
                        Ziyy Gym | Front Office
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
                            href="/fo"
                            className="text-gray-600 hover:text-gray-900"
                            >
                            FO
                            </BreadcrumbLink>
                            <BreadcrumbSeparator></BreadcrumbSeparator>
                            <BreadcrumbPage>Pemasukan</BreadcrumbPage>
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
                            <CardTitle>Transaksi Masuk Hari ini</CardTitle>
                            <CardDescription>
                                Klik pada transaksi untuk melihat detailnya.
                            </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <Table>
                                <TableHeader>
                                <TableRow>
                                    <TableHead>Judul</TableHead>
                                    <TableHead>Jenis</TableHead>
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
                                    <TableCell className="font-semibold">{tx.title}</TableCell>
                                    <TableCell>{getIncomeTypeBadge(tx.incomeType)}</TableCell>
                                    <TableCell>{tx.paymentAmount}</TableCell>
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
                                    Nama
                                </Label>
                                <p className="text-sm font-semibold">{selectedTx.memberName}</p>
                            </div>

                            <div>
                                <Label className="text-sm font-medium text-gray-600">
                                    Jenis
                                </Label>
                                <p className="text-sm font-semibold">{getIncomeTypeBadge(selectedTx.incomeType)}</p>
                            </div>

                            <div>
                                <Label className="text-sm font-medium text-gray-600">
                                    Judul
                                </Label>
                                <p className="text-sm font-semibold">{selectedTx.title}</p>
                            </div>

                            <div>
                                <Label className="text-sm font-medium text-gray-600">
                                    Keterangan
                                </Label>
                                <p className="text-sm font-semibold">{selectedTx.note}</p>
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
                                <p className="text-sm font-semibold">{selectedTx.paymentMethod}</p>
                            </div>

                            {(selectedTx.incomeType === "paketPt" || selectedTx.incomeType === "paketKelas") && (
                                <div>
                                    <Label className="text-sm font-medium text-gray-600">
                                        Jumlah Pertemuan
                                    </Label>
                                    <p className="text-sm font-semibold">{selectedTx.pertemuanAmount}</p>
                                </div>
                            )}
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

            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
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
                            <Label htmlFor="txIncomeType" className="text-right">
                                Jenis
                            </Label>
                            <p className="text-sm font-semibold">{getIncomeTypeBadge(txIncomeType)}</p>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="txMemberName" className="text-right">
                                Nama
                            </Label>
                            <Input
                                id="txMemberName"
                                value={txMemberName}
                                placeholder="-"
                                className="col-span-3"
                                disabled
                            />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="txPaymentAmount" className="text-right">
                                Jumlah
                            </Label>
                            <Input
                                id="txPaymentAmount"
                                value={txPaymentAmount}
                                placeholder="-"
                                className="col-span-3"
                                disabled
                            />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="txPaymentMethod" className="text-right">
                                Pembayaran
                            </Label>
                            <Input
                                id="txPaymentMethod"
                                value={txPaymentMethod}
                                placeholder="-"
                                className="col-span-3"
                                disabled
                            />
                            </div>

                            {(txIncomeType === "paketPt" || txIncomeType === "paketKelas") && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="txPertemuanAmount" className="text-right">
                                        Pertemuan
                                    </Label>
                                    <Input
                                        id="txPertemuanAmount"
                                        value={txPertemuaAnmount}
                                        placeholder="Jumlah Pertemuan"
                                        className="col-span-3"
                                        disabled
                                    />
                                </div>
                            )}
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
            </Dialog>
        </div>
    );
}