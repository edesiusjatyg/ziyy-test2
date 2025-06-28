"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader as DialogHeaderUI,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Trash2, User, Undo2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

// Transaction type
// ...existing code...
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

export default function TransactionsPage() {
  const [incomeTx, setIncomeTx] = useState<Transaction[]>([]);
  const [expenseTx, setExpenseTx] = useState<Transaction[]>([]);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // For edit dialog (income)
  const [txMemberName, setTxMemberName] = useState("");
  const [txIncomeType, setTxIncomeType] = useState("");
  const [txTitle, setTxTitle] = useState("");
  const [txNote, setTxNote] = useState("");
  const [txPaymentAmount, setTxPaymentAmount] = useState("");
  const [txPaymentMethod, setTxPaymentMethod] = useState("");
  const [txPertemuaAnmount, setTxPertemuanAmount] = useState("");
  // For edit dialog (expense)
  const [exTitle, setExTitle] = useState("");
  const [exNote, setExNote] = useState("");
  const [exPaymentAmount, setExPaymentAmount] = useState("");
  const [exPaymentMethod, setExPaymentMethod] = useState("");

  useEffect(() => {
    const fetchTx = async () => {
      try {
        const response = await fetch("/txFo.json");
        const data = await response.json();
        setIncomeTx(
          data.txFo.filter((tx: Transaction) => tx.type === "pemasukan")
        );
        setExpenseTx(
          data.txFo.filter((tx: Transaction) => tx.type === "pengeluaran")
        );
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTx();
  }, []);

  // Dialog handlers
  const handleTxClick = (tx: Transaction) => {
    setSelectedTx(tx);
    setIsDialogOpen(true);
  };
  const handleEditClick = () => {
    if (!selectedTx) return;
    if (selectedTx.type === "pemasukan") {
      setTxMemberName(selectedTx.memberName);
      setTxIncomeType(selectedTx.incomeType);
      setTxTitle(selectedTx.title);
      setTxNote(selectedTx.note);
      setTxPaymentAmount(selectedTx.paymentAmount);
      setTxPaymentMethod(selectedTx.paymentMethod);
      setTxPertemuanAmount(selectedTx.pertemuanAmount);
    } else {
      setExTitle(selectedTx.title);
      setExNote(selectedTx.note);
      setExPaymentAmount(selectedTx.paymentAmount);
      setExPaymentMethod(selectedTx.paymentMethod);
    }
    setIsEditDialogOpen(true);
  };
  const handleSaveEdit = () => {
    if (!selectedTx) return;
    if (selectedTx.type === "pemasukan") {
      selectedTx.title = txTitle;
      selectedTx.note = txNote;
      for (let i = 0; i < incomeTx.length; i++) {
        if (incomeTx[i].id === selectedTx.id) {
          incomeTx[i] = selectedTx;
          break;
        }
      }
    } else {
      selectedTx.title = exTitle;
      selectedTx.note = exNote;
      selectedTx.paymentAmount = exPaymentAmount;
      selectedTx.paymentMethod = exPaymentMethod;
      for (let i = 0; i < expenseTx.length; i++) {
        if (expenseTx[i].id === selectedTx.id) {
          expenseTx[i] = selectedTx;
          break;
        }
      }
    }
    setIsEditDialogOpen(false);
  };
  const handleDeleteTx = () => {
    if (!selectedTx) return;
    if (selectedTx.type === "pemasukan") {
      setIncomeTx(incomeTx.filter((tx) => tx.id !== selectedTx.id));
    } else {
      setExpenseTx(expenseTx.filter((tx) => tx.id !== selectedTx.id));
    }
    setIsDeleteDialogOpen(false);
    setIsDialogOpen(false);
  };

  // Badge helpers (copy from tx-income/tx-expense)
  const getIncomeTypeBadge = (incomeType: string) => {
    if (incomeType === "insidentilGym") {
      return (
        <span className="bg-green-100 text-green-800 rounded px-2 py-1 text-xs">
          Gym (Insidentil)
        </span>
      );
    } else if (incomeType === "insidentilPt") {
      return (
        <span className="bg-purple-100 text-purple-800 rounded px-2 py-1 text-xs">
          PT (Insidentil)
        </span>
      );
    } else if (incomeType === "insidentilKelas") {
      return (
        <span className="bg-indigo-100 text-indigo-800 rounded px-2 py-1 text-xs">
          Kelas (Insidentil)
        </span>
      );
    } else if (incomeType === "perpanjangMember") {
      return (
        <span className="bg-orange-100 text-orange-800 rounded px-2 py-1 text-xs">
          Perpanjang Member
        </span>
      );
    } else if (incomeType === "paketPt") {
      return (
        <span className="bg-red-100 text-red-800 rounded px-2 py-1 text-xs">
          Paket PT
        </span>
      );
    } else if (incomeType === "paketKelas") {
      return (
        <span className="bg-teal-100 text-teal-800 rounded px-2 py-1 text-xs">
          Paket Kelas
        </span>
      );
    }
  };
  // Payment method badge
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
        <div
          className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8"
          style={{ boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.08)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.history.back()}>
              <Undo2 className="text-white/80 hover:text-white transition-all"/>
            </div>
            <h2 className="text-white font-semibold text-xl tracking-tight">Ziyy Gym | Transaksi FO</h2>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all">
                    FO
                  </BreadcrumbLink>
                  <BreadcrumbSeparator></BreadcrumbSeparator>
                  <BreadcrumbPage className="text-white">Transaksi</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-gray-900">Pemasukan</CardTitle>
                <CardDescription>Hari Ini</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Rp2.400.000</p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-gray-900">Pengeluaran</CardTitle>
                <CardDescription>Hari Ini</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Rp400.000</p>
              </CardContent>
            </Card>
            {/* Income Table Card */}
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle>Pemasukan</CardTitle>
                <CardDescription>Transaksi masuk hari ini</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Judul</TableHead>
                      <TableHead>Nominal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incomeTx.map((tx) => (
                      <TableRow
                        key={tx.id}
                        className="cursor-pointer hover:bg-blue-50"
                        onClick={() => handleTxClick(tx)}
                      >
                        <TableCell>{tx.title}</TableCell>
                        <TableCell className="font-semibold">
                          {tx.paymentAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            {/* Expense Table Card */}
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle>Pengeluaran</CardTitle>
                <CardDescription>Transaksi keluar hari ini</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Judul</TableHead>
                      <TableHead>Nominal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenseTx.map((tx) => (
                      <TableRow
                        key={tx.id}
                        className="cursor-pointer hover:bg-blue-50"
                        onClick={() => handleTxClick(tx)}
                      >
                        <TableCell>{tx.title}</TableCell>
                        <TableCell className="font-semibold">
                          {tx.paymentAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Dialogs (details, edit, delete) */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md">
              <DialogHeaderUI>
                <DialogTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Transaction Details
                </DialogTitle>
                <DialogDescription>
                  Informasi detail tentang transaksi.
                </DialogDescription>
              </DialogHeaderUI>
              {selectedTx && selectedTx.type === "pemasukan" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        Nama
                      </Label>
                      <p className="text-sm font-semibold">
                        {selectedTx.memberName}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        Jenis
                      </Label>
                      <p className="text-sm font-semibold">
                        {getIncomeTypeBadge(selectedTx.incomeType)}
                      </p>
                    </div>
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
                    {(selectedTx.incomeType === "paketPt" ||
                      selectedTx.incomeType === "paketKelas") && (
                      <div>
                        <Label className="text-sm font-medium text-gray-600">
                          Jumlah Pertemuan
                        </Label>
                        <p className="text-sm font-semibold">
                          {selectedTx.pertemuanAmount}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {selectedTx && selectedTx.type === "pengeluaran" && (
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
                  onClick={() => setIsDeleteDialogOpen(true)}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <DialogContent className="max-w-md">
              <DialogHeaderUI>
                <DialogTitle className="flex items-center gap-2">
                  <Trash2 className="h-5 w-5" />
                  Delete Transaction
                </DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this transaction?
                </DialogDescription>
              </DialogHeaderUI>
              <DialogFooter className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 hover:cursor-pointer"
                  onClick={() => setIsDeleteDialogOpen(false)}
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
              <DialogHeaderUI>
                <DialogTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  Edit Transaction
                </DialogTitle>
                <DialogDescription>
                  Edit transaction information.
                </DialogDescription>
              </DialogHeaderUI>
              {selectedTx && selectedTx.type === "pemasukan" && (
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
                      <p className="text-sm font-semibold">
                        {getIncomeTypeBadge(txIncomeType)}
                      </p>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="txMemberName" className="text-right">
                        Nama
                      </Label>
                      <Input
                        id="txMemberName"
                        value={txMemberName}
                        onChange={(e) => setTxMemberName(e.target.value)}
                        placeholder="-"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="txPaymentAmount" className="text-right">
                        Jumlah
                      </Label>
                      <Input
                        type="number"
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
                    {(txIncomeType === "paketPt" ||
                      txIncomeType === "paketKelas") && (
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                          htmlFor="txPertemuanAmount"
                          className="text-right"
                        >
                          Pertemuan
                        </Label>
                        <Input
                          type="number"
                          id="txPertemuanAmount"
                          value={txPertemuaAnmount}
                          onChange={(e) => setTxPertemuanAmount(e.target.value)}
                          placeholder="Jumlah Pertemuan"
                          className="col-span-3"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {selectedTx && selectedTx.type === "pengeluaran" && (
                <div className="space-y-4">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="txTitle" className="text-right">
                        Judul
                      </Label>
                      <Input
                        id="txTitle"
                        value={exTitle}
                        onChange={(e) => setExTitle(e.target.value)}
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
                        value={exNote}
                        onChange={(e) => setExNote(e.target.value)}
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
                        value={exPaymentAmount}
                        onChange={(e) => setExPaymentAmount(e.target.value)}
                        placeholder="-"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="txPaymentMethod" className="text-right">
                        Pembayaran
                      </Label>
                      <Select
                        value={exPaymentMethod}
                        onValueChange={setExPaymentMethod}
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder={exPaymentMethod} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="transfer">Transfer</SelectItem>
                          <SelectItem value="debitBri">Debit BRI</SelectItem>
                          <SelectItem value="qrisBri">QRIS BRI</SelectItem>
                          <SelectItem value="debitMdr">
                            Debit Mandiri
                          </SelectItem>
                          <SelectItem value="qrisMdr">QRIS Mandiri</SelectItem>
                          <SelectItem value="edcMdr">EDC Mandiri</SelectItem>
                          <SelectItem value="transferMdr">
                            Transfer Mandiri
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsEditDialogOpen(false)}
                  className="flex items-center gap-2 hover:cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={handleSaveEdit}
                  className="flex items-center gap-2 hover:cursor-pointer"
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
