"use client"

import { useState, useEffect } from "react";
import { CirclePlus, ChevronsRight, Edit, Trash2 } from "lucide-react";
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
        }
        return null;
    };

    useEffect(() => {
        async function fetchTransactions() {
            const [canteenRes, foRes] = await Promise.all([
                fetch('/txCanteen.json'),
                fetch('/txFo.json')
            ]);
            const canteenData = await canteenRes.json();
            const foData = await foRes.json();
            // Get today's date in YYYY-MM-DD format
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            const todayStr = `${yyyy}-${mm}-${dd}`;
            // Normalize canteen transactions
            const canteenTx = (canteenData.txCanteen || [])
                .filter((tx: any) => tx.txType === 'pengeluaran' && tx.date === todayStr)
                .map((tx: any) => ({
                    id: tx.id,
                    txType: tx.txType,
                    txTitle: tx.txTitle || '-',
                    txNote: tx.txNote || '-',
                    itemType: tx.itemType || '-',
                    itemAmount: tx.itemAmount ? String(tx.itemAmount) : '-',
                    paymentAmount: tx.paymentAmount,
                    paymentMethod: tx.paymentMethod
                }));
            // Normalize fo transactions
            const foTx = (foData.txFo || [])
                .filter((tx: any) => tx.type === 'pengeluaran' && tx.date === todayStr)
                .map((tx: any) => ({
                    id: tx.id + 1000, // avoid id collision
                    txType: tx.type,
                    txTitle: tx.title || '-',
                    txNote: tx.note || '-',
                    itemType: '-',
                    itemAmount: '-',
                    paymentAmount: tx.paymentAmount,
                    paymentMethod: tx.paymentMethod
                }));
            setMockTx([...canteenTx, ...foTx]);
        }
        fetchTransactions();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[70%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">
                            Ziyy Gym | Accounting
                        </h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbLink href="/acc" className="text-gray-600 hover:text-gray-900">
                                        Accounting
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbPage>Pengeluaran Hari Ini</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="p-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Judul</TableHead>
                                    <TableHead>Catatan</TableHead>
                                    <TableHead>Jumlah</TableHead>
                                    <TableHead>Metode Pembayaran</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockTx.map((tx) => (
                                    <TableRow key={tx.id} onClick={() => handleTxClick(tx)} className="cursor-pointer hover:bg-gray-100">
                                        <TableCell>{tx.id}</TableCell>
                                        <TableCell>{tx.txTitle}</TableCell>
                                        <TableCell>{tx.txNote}</TableCell>
                                        <TableCell>Rp{tx.paymentAmount}</TableCell>
                                        <TableCell>{getPaymentMethodBadge(tx.paymentMethod)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Detail Transaksi</DialogTitle>
                    </DialogHeader>
                    {selectedTx && (
                        <div className="space-y-4">
                            <div>
                                <Label>ID Transaksi</Label>
                                <p className="text-sm font-semibold">{selectedTx.id}</p>
                            </div>
                            <div>
                                <Label>Judul</Label>
                                <p className="text-sm font-semibold">{selectedTx.txTitle}</p>
                            </div>
                            <div>
                                <Label>Catatan</Label>
                                <p className="text-sm font-semibold">{selectedTx.txNote}</p>
                            </div>
                            <div>
                                <Label>Jumlah Pembayaran</Label>
                                <p className="text-sm font-semibold">Rp{selectedTx.paymentAmount}</p>
                            </div>
                            <div>
                                <Label>Metode Pembayaran</Label>
                                <div>{getPaymentMethodBadge(selectedTx.paymentMethod)}</div>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <Button variant="outline" onClick={() => handleEditClick()}>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                </Button>
                                <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(true)}>
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Hapus
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Konfirmasi Hapus</DialogTitle>
                        <DialogDescription>
                            Apakah anda yakin ingin menghapus transaksi ini?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                            Batal
                        </Button>
                        <Button variant="destructive" onClick={handleDeleteTx}>
                            Hapus
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Transaksi</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <Label>Judul</Label>
                            <Input value={txTitle} onChange={(e) => setTxTitle(e.target.value)} />
                        </div>
                        <div>
                            <Label>Catatan</Label>
                            <Input value={txNote} onChange={(e) => setTxNote(e.target.value)} />
                        </div>
                        <div>
                            <Label>Jumlah Pembayaran</Label>
                            <Input value={txPaymentAmount} onChange={(e) => setTxPaymentAmount(e.target.value)} />
                        </div>
                        <div>
                            <Label>Metode Pembayaran</Label>
                            <Select value={txPaymentMethod} onValueChange={setTxPaymentMethod}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih metode pembayaran" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cash">Cash</SelectItem>
                                    <SelectItem value="transfer">Transfer</SelectItem>
                                    <SelectItem value="debitBri">Debit BRI</SelectItem>
                                    <SelectItem value="qrisBri">QRIS BRI</SelectItem>
                                    <SelectItem value="debitMdr">Debit Mandiri</SelectItem>
                                    <SelectItem value="qrisMdr">QRIS Mandiri</SelectItem>
                                    <SelectItem value="edcMdr">EDC Mandiri</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                            Batal
                        </Button>
                        <Button onClick={handleSaveEdit}>
                            Simpan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
