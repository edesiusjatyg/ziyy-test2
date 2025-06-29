"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CirclePlus, ChevronsRight, Edit, Trash2, User, Undo2 } from "lucide-react";
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
    const router = useRouter();

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

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        const fetchTxs = async () => {
            try {
                const response = await fetch('/txCanteen.json');
                const data = await response.json();

                const incomeTx = data.txCanteen.filter((tx: Transaction) => {
                    return tx.txType === "pengeluaran";
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
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl px-8 py-4 mb-8" style={{ background: '#7bb3d6' }}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/canteen")}>
                <Undo2 className="text-white/80 hover:text-white transition-all"/>
            </div>
            <h2 className="text-white font-semibold text-xl tracking-tight">Ziyy Gym | Kantin</h2>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/canteen" className="text-white/80 hover:text-white">
                    Kantin
                  </BreadcrumbLink>
                  <BreadcrumbSeparator></BreadcrumbSeparator>
                  <BreadcrumbPage className="text-white">Pengeluaran</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockTx.map((tx) => (
                <Card
                  key={tx.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full flex flex-col justify-between"
                  onClick={() => handleTxClick(tx)}
                >
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-base flex items-center gap-2">
                      {tx.txTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Nominal:</span>
                        <span className="font-semibold">{tx.paymentAmount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Pembayaran:</span>
                        {getPaymentMethodBadge(tx.paymentMethod)}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-row justify-end hover:text-gray-500 transition-all">
                    <ChevronsRight className="text-[#7bb3d6] text-sm" />
                    <p className="text-sm">Detail</p>
                  </CardFooter>
                </Card>
              ))}
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
                    <p className="text-sm font-semibold">{selectedTx.txTitle}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      Keterangan
                    </Label>
                    <p className="text-sm font-semibold">{selectedTx.txNote}</p>
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
        </Dialog>
      </div>
    </div>
    );
}