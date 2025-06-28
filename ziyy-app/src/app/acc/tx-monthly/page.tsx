"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Undo2 } from "lucide-react";
import { startOfWeek, endOfWeek, parseISO, isWithinInterval, startOfMonth, endOfMonth } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Transaction = {
  id: number;
  date: string;
  type: string;
  title: string;
  note: string;
  paymentAmount: string;
  paymentMethod: string;
};

export default function Page() {
  const router = useRouter();

  const [incomeTx, setIncomeTx] = useState<Transaction[]>([]);
  const [expenseTx, setExpenseTx] = useState<Transaction[]>([]);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Edit state
  const [editTitle, setEditTitle] = useState("");
  const [editNote, setEditNote] = useState("");
  const [editPaymentAmount, setEditPaymentAmount] = useState("");
  const [editPaymentMethod, setEditPaymentMethod] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    fetch("/txAct.json")
      .then((res) => res.json())
      .then((data) => {
        const txs = data.txAct || [];

        const now = new Date();
        const monthStart = startOfMonth(now);
        const monthEnd = endOfMonth(now);

        const monthlyTxs = txs.filter((tx: Transaction) => {
            if (!tx.date) return false;
            const txDate = parseISO(tx.date);
            return isWithinInterval(txDate, { start: monthStart, end: monthEnd });
        });

        setIncomeTx(monthlyTxs.filter((tx: Transaction) => tx.type === "pemasukan"));
        setExpenseTx(monthlyTxs.filter((tx: Transaction) => tx.type === "pengeluaran"));
      });
  }, []);

  // Dialog handlers
  const handleTxClick = (tx: Transaction) => {
    setSelectedTx(tx);
    setIsDialogOpen(true);
  };
  const handleEditClick = () => {
    if (!selectedTx) return;
    setEditTitle(selectedTx.title);
    setEditNote(selectedTx.note);
    setEditPaymentAmount(selectedTx.paymentAmount);
    setEditPaymentMethod(selectedTx.paymentMethod);
    setEditDate(selectedTx.date);
    setIsEditDialogOpen(true);
  };
  const handleSaveEdit = () => {
    if (!selectedTx) return;
    const updatedTx = {
      ...selectedTx,
      title: editTitle,
      note: editNote,
      paymentAmount: editPaymentAmount,
      paymentMethod: editPaymentMethod,
      date: editDate,
    };
    if (selectedTx.type === "pemasukan") {
      setIncomeTx((prev) => prev.map((tx) => (tx.id === selectedTx.id ? updatedTx : tx)));
    } else {
      setExpenseTx((prev) => prev.map((tx) => (tx.id === selectedTx.id ? updatedTx : tx)));
    }
    setSelectedTx(updatedTx);
    setIsEditDialogOpen(false);
    setIsDialogOpen(false);
  };
  const handleDeleteTx = () => {
    if (!selectedTx) return;
    if (selectedTx.type === "pemasukan") {
      setIncomeTx((prev) => prev.filter((tx) => tx.id !== selectedTx.id));
    } else {
      setExpenseTx((prev) => prev.filter((tx) => tx.id !== selectedTx.id));
    }
    setIsDeleteDialogOpen(false);
    setIsDialogOpen(false);
    setSelectedTx(null);
  };
  const getPaymentMethodBadge = (paymentMethod: string) => {
    if (paymentMethod === "cash") {
      return (
        <span className="bg-green-100 text-green-800 rounded px-2 py-1 text-xs">
          Cash
        </span>
      );
    } else if (paymentMethod === "transfer") {
      return (
        <span className="bg-green-100 text-green-800 rounded px-2 py-1 text-xs">
          Transfer
        </span>
      );
    } else if (paymentMethod === "debitBri") {
      return (
        <span className="bg-orange-100 text-orange-800 rounded px-2 py-1 text-xs">
          Debit BRI
        </span>
      );
    } else if (paymentMethod === "qrisBri") {
      return (
        <span className="bg-orange-100 text-orange-800 rounded px-2 py-1 text-xs">
          QRIS BRI
        </span>
      );
    } else if (paymentMethod === "debitMdr") {
      return (
        <span className="bg-indigo-100 text-indigo-800 rounded px-2 py-1 text-xs">
          Debit Mandiri
        </span>
      );
    } else if (paymentMethod === "qrisMdr") {
      return (
        <span className="bg-indigo-100 text-indigo-800 rounded px-2 py-1 text-xs">
          QRIS Mandiri
        </span>
      );
    } else if (paymentMethod === "edcMdr") {
      return (
        <span className="bg-indigo-100 text-indigo-800 rounded px-2 py-1 text-xs">
          EDC Mandiri
        </span>
      );
    } else if (paymentMethod === "transferMdr") {
      return (
        <span className="bg-indigo-100 text-indigo-800 rounded px-2 py-1 text-xs">
          Transfer Mandiri
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
      <div className="w-full max-w-6xl py-4 md:py-8">
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8 mt-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/acc')}>
              <Undo2 className="text-white/80 hover:text-white transition-all"/>
            </div>
            <h2 className="text-white font-semibold text-xl tracking-tight">Ziyy Gym | Accounting</h2>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/acc" className="text-white/80 hover:text-white transition-all">
                    Accounting
                  </BreadcrumbLink>
                  <BreadcrumbSeparator></BreadcrumbSeparator>
                  <BreadcrumbPage className="text-white">Transaksi Bulanan</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Income Table Card */}
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-gray-900">Pemasukan</CardTitle>
                <CardDescription>Bulan Ini</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Judul</TableHead>
                      <TableHead>Nominal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incomeTx.map((tx) => (
                      <TableRow
                        key={tx.id}
                        className="cursor-pointer hover:bg-blue-50 transition-colors"
                        onClick={() => handleTxClick(tx)}
                      >
                        <TableCell>{tx.date || '-'}</TableCell>
                        <TableCell>{tx.title}</TableCell>
                        <TableCell className="font-semibold">{tx.paymentAmount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            {/* Expense Table Card */}
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-gray-900">Pengeluaran</CardTitle>
                <CardDescription>Bulan Ini</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Judul</TableHead>
                      <TableHead>Nominal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenseTx.map((tx) => (
                      <TableRow
                        key={tx.id}
                        className="cursor-pointer hover:bg-blue-50 transition-colors"
                        onClick={() => handleTxClick(tx)}
                      >
                        <TableCell>{tx.date || '-'}</TableCell>
                        <TableCell>{tx.title}</TableCell>
                        <TableCell className="font-semibold">{tx.paymentAmount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          {/* Detail Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  Detail Transaksi
                </DialogTitle>
                <DialogDescription>Informasi detail transaksi.</DialogDescription>
              </DialogHeader>
              {selectedTx && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        Judul
                      </Label>
                      <p className="text-sm font-semibold">
                        {selectedTx.title}
                      </p>
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
                      <p className="text-sm font-semibold">
                        {selectedTx.paymentAmount}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        Pembayaran
                      </Label>
                      <p className="text-sm font-semibold">
                        {getPaymentMethodBadge(selectedTx.paymentMethod)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter className="flex gap-2 mt-4">
                <Button variant="outline" className="flex items-center gap-2" onClick={handleEditClick}><Edit className="h-4 w-4" />Edit</Button>
                <Button variant="destructive" className="flex items-center gap-2" onClick={() => setIsDeleteDialogOpen(true)}><Trash2 className="h-4 w-4" />Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Edit Dialog */}
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  Edit Transaksi
                </DialogTitle>
                <DialogDescription>Edit data transaksi.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="editTitle" className="text-right">Judul</Label>
                    <Input id="editTitle" value={editTitle} onChange={e => setEditTitle(e.target.value)} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="editNote" className="text-right">Keterangan</Label>
                    <Input id="editNote" value={editNote} onChange={e => setEditNote(e.target.value)} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="editPaymentAmount" className="text-right">Nominal</Label>
                    <Input id="editPaymentAmount" type="number" value={editPaymentAmount} onChange={e => setEditPaymentAmount(e.target.value)} className="col-span-3 w-36" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="editPaymentMethod" className="text-right">Pembayaran</Label>
                    <Select value={editPaymentMethod} onValueChange={setEditPaymentMethod}>
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
                    <Label htmlFor="editDate" className="text-right">Tanggal</Label>
                    <Input id="editDate" type="date" value={editDate} onChange={e => setEditDate(e.target.value)} className="col-span-3 w-36" />
                  </div>
                </div>
              </div>
              <DialogFooter className="flex gap-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="flex items-center gap-2">Cancel</Button>
                <Button variant="default" onClick={handleSaveEdit} className="flex items-center gap-2">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Delete Dialog */}
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Trash2 className="h-5 w-5" />
                  Hapus Transaksi
                </DialogTitle>
                <DialogDescription>Yakin ingin menghapus transaksi ini?</DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex gap-2">
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} className="flex items-center gap-2">Cancel</Button>
                <Button variant="destructive" onClick={handleDeleteTx} className="flex items-center gap-2">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
