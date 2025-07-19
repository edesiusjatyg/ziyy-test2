"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { hasCanteenCrudAccess } from "@/lib/rbac";
import { CirclePlus, ChevronsRight, Edit, Trash2, User, Undo2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format";

interface CanteenItem {
    id: number;
    name: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}

type Transaction = {
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
};

export default function Page() {
    const router = useRouter();
    const { data: session } = useSession();

    // Permission checks
    const canCreate = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasCanteenCrudAccess(session.user.role, "DELETE") : false;

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [canteenItems, setCanteenItems] = useState<CanteenItem[]>([]);
    const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [txItemAmount, setTxItemAmount] = useState("");
    const [txItemId, setTxItemId] = useState("");
    const [txPaymentAmount, setTxPaymentAmount] = useState("");
    const [txPaymentMethod, setTxPaymentMethod] = useState("");

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
            const response = await fetch('/api/transaction-canteen');
            if (response.ok) {
                const transactions: Transaction[] = await response.json();
                
                const expenseTx = transactions.filter((tx: Transaction) => {
                    return tx.type === "PENGELUARAN";
                });

                setTransactions(expenseTx);
            }
        } catch (error) {
            console.error('Error fetching transactions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleTxClick = (tx: Transaction) => {
        setSelectedTx(tx);
        setIsDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedTx) {
            setTxTitle(selectedTx.title || "");
            setTxNote(selectedTx.note || "");
            setTxItemAmount(selectedTx.itemAmount?.toString() || "");
            setTxItemId(selectedTx.itemId?.toString() || "");
            setTxPaymentAmount(selectedTx.paymentAmount.toString());
            setTxPaymentMethod(selectedTx.paymentMethod);
            setIsEditDialogOpen(true);
        }
    };

    const handleSaveEdit = async () => {
        if (selectedTx) {
            try {
                const updateData = {
                    title: txTitle,
                    note: txNote,
                    itemId: txItemId ? parseInt(txItemId) : null,
                    itemAmount: txItemAmount ? parseInt(txItemAmount) : null,
                    paymentAmount: parseInt(txPaymentAmount),
                    paymentMethod: txPaymentMethod,
                };

                const response = await fetch('/api/transaction-canteen', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: selectedTx.id, ...updateData }),
                });

                if (response.ok) {
                    loadData(); // Reload data
                    setIsEditDialogOpen(false);
                    setIsDialogOpen(false);
                } else {
                    console.error('Failed to update transaction');
                }
            } catch (error) {
                console.error('Error updating transaction:', error);
            }
        }
    };

    const handleDeleteTx = async () => {
        if (selectedTx) {
            try {
                const response = await fetch('/api/transaction-canteen', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: selectedTx.id }),
                });

                if (response.ok) {
                    loadData(); // Reload data
                    setIsDeleteDialogOpen(false);
                    setIsDialogOpen(false);
                } else {
                    console.error('Failed to delete transaction');
                }
            } catch (error) {
                console.error('Error deleting transaction:', error);
            }
        }
    };

    const getPaymentMethodBadge = (paymentMethod: string) => {
        if (paymentMethod === "CASH") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Cash</Badge>;
        } else if (paymentMethod === "TRANSFER") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Transfer</Badge>;
        } else if (paymentMethod === "DEBIT_BRI") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Debit BRI</Badge>;
        } else if (paymentMethod === "QRIS_BRI") {
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">QRIS BRI</Badge>;
        } else if (paymentMethod === "DEBIT_MANDIRI") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Debit Mandiri</Badge>;
        } else if (paymentMethod === "QRIS_MANDIRI") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">QRIS Mandiri</Badge>;
        } else if (paymentMethod === "EDC_MANDIRI") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">EDC Mandiri</Badge>;
        } else if (paymentMethod === "TRANSFER_MANDIRI") {
            return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Transfer Mandiri</Badge>;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
          <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
              <div className="flex items-center rounded-t-2xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
                <div className="w-32 flex items-center gap-2 cursor-pointer" onClick={() => router.push("/canteen")}>
                  <Undo2 className="text-white/80 hover:text-white transition-all"/>
                </div>
                <div className="flex-1 text-center">
                  <h2 className="text-white font-semibold text-lg md:text-xl tracking-tight">
                    Ziyy Gym
                  </h2>
                </div>
                <div className="w-32 flex justify-end">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/canteen" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                          Kantin
                        </BreadcrumbLink>
                        <BreadcrumbSeparator></BreadcrumbSeparator>
                        <BreadcrumbPage className="text-white text-sm md:text-base">Pengeluaran</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>

          <div className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 pb-8">
              {loading ? (
                <p className="text-center text-gray-500 col-span-full">Loading...</p>
              ) : (
                transactions.map((tx) => (
                  <Card
                    key={tx.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full flex flex-col justify-between"
                    onClick={() => handleTxClick(tx)}
                  >
                    <CardHeader>
                      <CardTitle className="text-gray-900 text-base flex items-center gap-2">
                        {tx.title || "Expense Transaction"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-gray-500">Nominal:</p>
                          <p className="text-xs text-gray-500">{formatCurrency(tx.paymentAmount)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-gray-500">Pembayaran:</p>
                          {getPaymentMethodBadge(tx.paymentMethod)}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex-row justify-end hover:text-gray-500 transition-all">
                      <ChevronsRight className="text-[#7bb3d6] text-sm" />
                      <p className="text-sm">Detail</p>
                    </CardFooter>
                  </Card>
                ))
              )}
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
                      Judul
                    </Label>
                    <p className="text-sm font-semibold">{selectedTx.title || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      Keterangan
                    </Label>
                    <p className="text-sm">{selectedTx.note || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      Jumlah
                    </Label>
                    <p className="text-sm">{formatCurrency(selectedTx.paymentAmount)}</p>
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
              {canUpdate && (
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:cursor-pointer"
                onClick={handleEditClick}
              >
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              )}
              {canDelete && (
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
              )}
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
                  <Label htmlFor="txPaymentAmount" className="text-right">
                    Jumlah
                  </Label>
                  <Input
                    id="txPaymentAmount"
                    type="number"
                    value={txPaymentAmount}
                    onChange={(e) => setTxPaymentAmount(e.target.value)}
                    placeholder="Jumlah Pembayaran"
                    className="col-span-3 w-32"
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
    </div>
    );
}