"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CirclePlus, Undo2, Info, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertDialog, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, User } from "lucide-react";
import { MemberSearch } from "@/components/ui/member-search";
import { hasFoCrudAccess } from "@/lib/rbac";

interface Member {
  id: number;
  name: string;
  nik: string;
  phone: string;
  membership: string;
  joinDate: string;
  expiryDate: string;
  status: string;
}

interface Arrival {
  id: string;
  name: string;
  arrivalDate: string;
  arrivalType: string;
}

interface Insidentil {
    id: string;
    name: string;
    type: string;
    class: string;
    pt: boolean;
    sauna: boolean;
    date: string;
    paymentMethod: string;
    paymentAmount: number;
}

export default function Page() {
    const router = useRouter();
    const { data: session } = useSession();
    const [show, setShow] = useState(false);

    // Check permissions
    const canCreate = session?.user?.role ? hasFoCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasFoCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasFoCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasFoCrudAccess(session.user.role, "DELETE") : false;

    const [isAbsDialogOpen, setIsAbsDialogOpen] = useState(false);
    const [isAddMemberDialogOpen, setIsAddMemberDialogOpen] = useState(false);
    const [isAddInsDialogOpen, setIsAddInsDialogOpen] = useState(false);
    const [isAddTxDialogOpen, setIsAddTxDialogOpen] = useState(false);
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const [memberName, setMemberName] = useState("");
    const [coupleName, setCoupleName] = useState("");
    const [memberNik, setMemberNik] = useState("");
    const [coupleNik, setCoupleNik] = useState("");
    const [memberTelp, setMemberTelp] = useState("");
    const [coupleTelp, setCoupleTelp] = useState("");
    const [memberType, setMemberType] = useState("");
    const [memberDuration, setMemberDuration] = useState("");
    const [memberPt, setMemberPt] = useState(false);
    const [memberPtAmount, setMemberPtAmount] = useState("");

    const [insName, setInsName] = useState("");
    const [insType, setInsType] = useState("");
    const [insClass, setInsClass] = useState("");
    const [insPt, setInsPt] = useState(false);
    const [insSauna, setInsSauna] = useState(false);

    const [txType, setTxType] = useState("");
    const [txTitle, setTxTitle] = useState("");
    const [txNote, setTxNote] = useState("");
    const [txIncomeType, setTxIncomeType] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const [pertemuanAmount, setPertemuanAmount] = useState("");

    const [members, setMembers] = useState<Member[]>([]);
    const [newMembers, setNewMembers] = useState<Member[]>([]);
    const [nearExpMembers, setNearExpMembers] = useState<Member[]>([]);
    const [memberArrival, setMemberArrival] = useState<Arrival[]>([]);
    const [insCount, setInsCount] = useState<Insidentil[]>([]);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Add state for near-expiry member dialog
    type NullableMember = Member | null;
    const [selectedNearExpMember, setSelectedNearExpMember] = useState<NullableMember>(null);
    const [isNearExpDialogOpen, setIsNearExpDialogOpen] = useState(false);
    const [isNearExpDeleteDialogOpen, setIsNearExpDeleteDialogOpen] = useState(false);

    // State for perpanjang dialog
    const [isNearExpPerpanjangDialogOpen, setIsNearExpPerpanjangDialogOpen] = useState(false);
    const [perpanjangName, setPerpanjangName] = useState("");
    const [perpanjangNik, setPerpanjangNik] = useState("");
    const [perpanjangTelp, setPerpanjangTelp] = useState("");
    const [perpanjangType, setPerpanjangType] = useState("");
    const [perpanjangDuration, setPerpanjangDuration] = useState("");
    const [perpanjangMethod, setPerpanjangMethod] = useState("");

    const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
    const [absenceType, setAbsenceType] = useState("");

    const fetchMembers = async () => {
        try{
            const response = await fetch('/api/members');
            if(!response.ok){
                throw new Error('Failed to fetch members from DB through API')
            }

            const data = await response.json();
            setMembers(data);

            const today = new Date().toISOString().split("T")[0];
            setNewMembers((data || []).filter((m: Member) => m.joinDate && m.joinDate.split("T")[0] === today));

            const now = new Date();
            setNearExpMembers((data || []).filter((m: Member) => {
                if (!m.expiryDate) return false;
                const expiry = new Date(m.expiryDate);
                const diff = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
                return diff >= 0 && diff <= 7;
            }));
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    }

    const fetchIncidentiles = async () => {
        try{
            const response = await fetch('/api/incidentile');
            if(!response.ok){
                throw new Error('Failed to fetch incidentiles from DB through API')
            }

            const data = await response.json();
            setInsCount(data);

            const today = new Date().toISOString().split("T")[0];
            setInsCount(data.filter((i: Insidentil) => i.date && i.date.split("T")[0] === today));
        } catch (error) {
            console.error('Error fetching incidentiles:', error);
        }
    }

    const fetchArrivals = async () => {
        try{
            const response = await fetch('/api/member-arrivals');
            if(!response.ok){
                throw new Error('Failed to fetch arrivals from DB through API')
            }

            const data = await response.json();
            setMemberArrival(data);

            const today = new Date().toISOString().split("T")[0];
            setMemberArrival(
                data.filter((arrival: Arrival) => arrival.arrivalDate && arrival.arrivalDate.split("T")[0] === today)
            );
        } catch (error) {
            console.error('Error fetching arrivals:', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);
        loadAllData();
    }, []);

    const loadAllData = async () => {
        setLoading(true);
        try {
            await Promise.all([
                fetchMembers(),
                fetchArrivals(),
                fetchIncidentiles()
            ]);
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAddMemberDialogOpen) {
            setPaymentAmount(getMemberPaymentAmount().toString());
        }
    }, [memberType, memberDuration, memberPt, memberPtAmount, isAddMemberDialogOpen]);

    useEffect(() => {
        if (isAddInsDialogOpen) {
            setPaymentAmount(getInsPaymentAmount().toString());
        }
    }, [insType, insClass, insPt, insSauna, isAddInsDialogOpen]);

    const handleAbsenceSubmit = async () => {
        if (!selectedMemberId || !absenceType) {
            alert("Please provide the member's name and the arrival type.");
            return;
        }

        const selectedMember = members.find(m => m.id === selectedMemberId);
        if (selectedMember) {
            if (selectedMember.status.toUpperCase() === "EXPIRED") {
                alert("Member ini sudah expired. Tidak dapat mencatat kedatangan.");
                return;
            }
        }

        try {
            const response = await fetch('/api/member-arrivals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberId: selectedMemberId,
                    arrivalType: absenceType.toUpperCase(),
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.error || 'Failed to record arrival.');
                return;
            }
            
            setSelectedMemberId(null);
            setAbsenceType("");
            setIsAbsDialogOpen(false);
            alert(`Kedatangan ${selectedMember?.name} berhasil dicatat.`);
            fetchArrivals();
        } catch (error) {
            console.error('Error handling arrival submission:', error);
        }
    };

    const handleAddMemberSubmit = async () => {
        try {
            const memberPayload: any = {
                name: memberName,
                nik: memberNik,
                phone: memberTelp,
                membership: memberType.toUpperCase(),
                ptAmount: memberPt ? parseInt(memberPtAmount) : null,
                joinDate: new Date().toISOString(),
                expiryDate: (() => {
                    const now = new Date();
                    if (memberDuration === "1") now.setMonth(now.getMonth() + 1);
                    else if (memberDuration === "7") now.setMonth(now.getMonth() + 7);
                    else if (memberDuration === "15") now.setMonth(now.getMonth() + 15);
                    return now.toISOString();
                })(),
                status: "ACTIVE",
            };

            let couplePayload = null;
            if (memberType === "couple") {
                couplePayload = {
                    name: coupleName,
                    nik: coupleNik,
                    phone: coupleTelp,
                    membership: "COUPLE",
                    joinDate: new Date().toISOString(),
                    expiryDate: memberPayload.expiryDate,
                    status: "ACTIVE",
                };
            }

            const memberRes = await fetch('/api/members', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ member: memberPayload, couple: couplePayload }),
            });
            const memberResult = await memberRes.json();
            if (!memberRes.ok) {
                alert(memberResult.error || 'Gagal menambah member.');
                return;
            }

            const txRes = await fetch('/api/transaction-fo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: "PEMASUKAN",
                    title: `Pendaftaran Member Baru - ${memberName}`,
                    note: memberType === "couple" ? `Couple: ${coupleName}` : "",
                    paymentMethod: paymentMethod.toUpperCase(),
                    paymentAmount: getMemberPaymentAmount(),
                    date: new Date().toISOString(),
                }),
            });
            const txResult = await txRes.json();
            if (!txRes.ok) {
                alert(txResult.error || 'Gagal menambah transaksi FO.');
                return;
            }

            setMemberName("");
            setCoupleName("");
            setMemberNik("");
            setCoupleNik("");
            setMemberTelp("");
            setCoupleTelp("");
            setMemberType("");
            setMemberDuration("");
            setPaymentAmount("");
            setPaymentMethod("");
            setIsAddMemberDialogOpen(false);
            alert(`Member ${memberName} berhasil ditambahkan.`);
            fetchMembers();
        } catch (error) {
            alert('Terjadi kesalahan saat menambah member.');
            console.error(error);
        }
    };

    const handleAddInsSubmit = async () => {
        try {
            const insResponse = await fetch('/api/incidentile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: insName,
                    type: insType.toUpperCase(),
                    class: insClass ? insClass.toUpperCase() : null,
                    pt: insPt,
                    sauna: insSauna,
                    paymentMethod: paymentMethod.toUpperCase(),
                    paymentAmount: getInsPaymentAmount(),
                    date: new Date().toISOString(),
                }),
            });
            const insResult = await insResponse.json();
            if (!insResponse.ok) {
                alert(insResult.error || 'Gagal menambah insidentil.');
                return;
            }

            const txResponse = await fetch('/api/transaction-fo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: "PEMASUKAN",
                    title: `Insidentil - ${insName}`,
                    note: `Insidentil ${insType}${insClass ? ` (${insClass})` : ""}${insPt ? " + PT" : ""}${insSauna ? " + Sauna" : ""}`,
                    paymentMethod: paymentMethod.toUpperCase(),
                    paymentAmount: getInsPaymentAmount(),
                    date: new Date().toISOString(),
                }),
            });
            const txResult = await txResponse.json();
            if (!txResponse.ok) {
                alert(txResult.error || 'Gagal menambah transaksi FO.');
                return;
            }

            setInsName("");
            setInsType("");
            setInsClass("");
            setInsPt(false);
            setInsSauna(false);
            setPaymentMethod("");
            setPaymentAmount("");
            setIsAddInsDialogOpen(false);
            alert(`Insidentil ${insName} berhasil ditambahkan.`);
            fetchIncidentiles();
        } catch (error) {
            alert('Terjadi kesalahan saat menambah insidentil.');
            console.error(error);
        }
    };

    const handleAddTxSubmit = () => {
        console.log("Transaction Type:", txType);
        if(txType === "pemasukan") {
            console.log("Member Name:", memberName);
            console.log("Payment Type:", txIncomeType);
            if(txIncomeType === "paketPt" || "paketKelas"){
                console.log("Pertemuan Amount:", pertemuanAmount);
            }
            console.log("Payment Amount:", paymentAmount);
            console.log("Payment Method:", paymentMethod);
        }else {
            console.log("Transaction Title: ", txTitle);
            console.log("Transaction Note: ", txNote);
            console.log("Payment Amount:", paymentAmount);
            console.log("Payment Method:", paymentMethod);
        }
        
        setTxType("");
        setTxIncomeType("");
        setTxTitle("");
        setTxNote("");
        setMemberName("");
        setPaymentAmount("");
        setPaymentMethod("");
        setPertemuanAmount("");
        setIsAddTxDialogOpen(false);
    };

    const handleContact = (member: Member) => {
        if (!member.phone) {
            setIsAlertDialogOpen(true);
            return;
        }
        window.open(`https://wa.me/${member.phone.replace(/^0/, '+62')}`);
    };

    const handleNearExpMemberClick = (member: Member) => {
      setSelectedNearExpMember(member);
      setPerpanjangName(member.name);
      setPerpanjangNik(member.nik);
      setPerpanjangTelp(member.phone);
      setIsNearExpDialogOpen(true);
    };

    const handleNearExpDeleteMember = () => {
      if (selectedNearExpMember) {
        setNearExpMembers(prev => prev.filter(m => m.id !== selectedNearExpMember.id));
        setMembers(prev => prev.filter(m => m.id !== selectedNearExpMember.id));
        setIsNearExpDeleteDialogOpen(false);
        setIsNearExpDialogOpen(false);
        setSelectedNearExpMember(null);
      }
    };

    const handleNearExpPerpanjangClick = () => {
      if (selectedNearExpMember) {
        setPerpanjangName(selectedNearExpMember.name);
        setPerpanjangNik(selectedNearExpMember.nik);
        setPerpanjangTelp(selectedNearExpMember.phone);
        setPerpanjangType(
          (() => {
            switch (selectedNearExpMember.membership) {
              case "Personal": return "personal";
              case "Couple": return "couple";
              case "MuayThaiMember": return "muayThaiMember";
              case "MuayThaiPrivate": return "muayThaiPrivate";
              default: return "";
            }
          })()
        );
        setPerpanjangDuration("");
        setPerpanjangMethod("");
        setIsNearExpPerpanjangDialogOpen(true);
      }
    };

    const handlePerpanjangSubmit = async () => {
      try {
        const memberToUpdate = members.find(m => m.id === selectedNearExpMember?.id);
        if (!memberToUpdate) {
          alert('Member tidak ditemukan.');
          return;
        }
        
        const now = new Date();
        let baseDate = new Date(memberToUpdate.expiryDate);
        if (baseDate < now) baseDate = now;
        let newExpiry = new Date(baseDate);
        if (perpanjangDuration === "1") newExpiry.setMonth(newExpiry.getMonth() + 1);
        else if (perpanjangDuration === "7") newExpiry.setMonth(newExpiry.getMonth() + 7);
        else if (perpanjangDuration === "15") newExpiry.setMonth(newExpiry.getMonth() + 15);
        
        const putRes = await fetch('/api/members', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: memberToUpdate.id,
            expiryDate: newExpiry.toISOString(),
            status: 'ACTIVE',
          }),
        });
        const putResult = await putRes.json();
        if (!putRes.ok) {
          alert(putResult.error || 'Gagal memperpanjang member.');
          return;
        }
        
        const txRes = await fetch('/api/transaction-fo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'PEMASUKAN',
            title: `Perpanjang Member - ${perpanjangName}`,
            note: '',
            paymentMethod: perpanjangMethod.toUpperCase(),
            paymentAmount: getPerpanjangAmount(),
            date: new Date().toISOString(),
          }),
        });
        const txResult = await txRes.json();
        if (!txRes.ok) {
          alert(txResult.error || 'Gagal menambah transaksi perpanjang.');
          return;
        }
        setPerpanjangName("");
        setPerpanjangNik("");
        setPerpanjangTelp("");
        setPerpanjangType("");
        setPerpanjangDuration("");
        setPerpanjangMethod("");
        setIsNearExpPerpanjangDialogOpen(false);
        setSelectedNearExpMember(null);
        alert(`Member ${perpanjangName} berhasil diperpanjang.`);
        fetchMembers();
      } catch (error) {
        alert('Terjadi kesalahan saat memperpanjang member.');
        console.error(error);
      }
    };

    const getPerpanjangAmount = () => {
      let total = 0;
      if (perpanjangType === "personal") {
        if (perpanjangDuration === "1") total += 250000;
        else if (perpanjangDuration === "7") total += 1350000;
        else if (perpanjangDuration === "15") total += 2700000;
      } else if (perpanjangType === "couple") {
        if (perpanjangDuration === "1") total += 500000;
        else if (perpanjangDuration === "7") total += 2650000;
        else if (perpanjangDuration === "15") total += 4950000;
      } else if (perpanjangType === "muayThaiMember") total += 250000;
      else if (perpanjangType === "muayThaiPrivate") total += 1500000;
      return total;
    }

    const getMemberPaymentAmount = () => {
        let total = 0;

        if (memberType === "personal") {
            if (memberDuration === "1") total += 300000;
            else if (memberDuration === "7") total += 1400000;
            else if (memberDuration === "15") total += 2750000;

            if (memberPt) { 
                if (memberPtAmount === "1") total += 200000;
                else if (memberPtAmount === "4") total += 600000;
                else if (memberPtAmount === "6") total += 900000;
                else if (memberPtAmount === "8") total += 1200000;
                else if (memberPtAmount === "10") total += 1500000;
                else total += 200000 * (parseInt(memberPtAmount));
            }
        } else if (memberType === "couple") {
            if (memberDuration === "1") total += 550000;
            else if (memberDuration === "7") total += 2700000;
            else if (memberDuration === "15") total += 5000000;

            if (memberPt) { 
                if (memberPtAmount === "10") total += 2250000;
            }
        } else if (memberType === "muayThaiMember") total += 250000;
        else if (memberType === "muayThaiPrivate") total += 1500000;

        return total;
    };

    const getInsPaymentAmount = () => {
        if (insType === "gym") {
            if(insPt && insSauna) return 200000;
            else if (insPt) return 180000;
            else if (insSauna) return 50000;
            return 30000;
        }else if (insType === "kelas") {
            if (insClass === "zumba") return 30000;
            else if (insClass === "bodyFat") return 25000;
            else if (insClass === "aerobic") return 25000;
            else if (insClass === "muayThai") return 40000;
        } else if (insType === "pt") {
            return 150000;
        } else if (insType === "sauna") {
            return 25000;
        }
        return 0;
    };

    const getStatusBadge = (status: string) => {
      if (status.toUpperCase() === "ACTIVE") {
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aktif</Badge>;
      } else if (status.toUpperCase() === "NEAREXP") {
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Akan Habis</Badge>;
      } else if (status.toUpperCase() === "EXPIRED") {
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Expired</Badge>;
      }
      return null;
    };

    const getMembershipBadge = (membership: string) => {
      if (membership.toUpperCase() === "PERSONAL") {
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Personal</Badge>;
      } else if (membership.toUpperCase() === "COUPLE") {
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Couple</Badge>;
      } else if (membership.toUpperCase() === "MUAY_THAI_MEMBER") {
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Muay Thai Member</Badge>;
      } else if (membership.toUpperCase() === "MUAY_THAI_PRIVATE") {
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Muay Thai Private</Badge>;
      }
      return null;
    };

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
                                        <BreadcrumbPage className="text-white text-sm md:text-base">FO</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-4 px-8">
                        <Link href={"/fo/member"}>
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full">
                                <CardHeader>
                                    <CardTitle className="text-gray-900 text-center">Total Member</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading ? (
                                        <div className="flex justify-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                        </div>
                                    ) : (
                                        <p className="text-lg text-gray-700 text-center">{members.length}</p>
                                    )}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href={"/fo/member-new"}>
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full">
                                <CardHeader>
                                    <CardTitle className="text-gray-900 text-center">Member Baru</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading ? (
                                        <div className="flex justify-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                        </div>
                                    ) : (
                                        <p className="text-lg text-gray-700 text-center">{newMembers.length}</p>
                                    )}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href={"/fo/member-arrival"}>
                            <Card className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer h-full">
                                <CardHeader>
                                    <CardTitle className="text-gray-900 text-center">Kedatangan Member</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading ? (
                                        <div className="flex justify-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                        </div>
                                    ) : (
                                        <p className="text-lg text-gray-700 text-center">{memberArrival.length}</p>
                                    )}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href={"/fo/incidentile"}>
                            <Card className="bg-white rounded-xl shadow-sm justify-between hover:shadow-lg transition-all border-0 cursor-pointer h-full">
                                <CardHeader>
                                    <CardTitle className="text-gray-900 text-center">Insidentil Hari Ini</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading ? (
                                        <div className="flex justify-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                        </div>
                                    ) : (
                                        <p className="text-lg text-gray-700 text-center">{insCount.length}</p>
                                    )}
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 px-8">
                        <Card className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border-0 cursor-pointer">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-center">Member Mendekati Habis ({nearExpMembers.length})</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {loading ? (
                                    <div className="flex justify-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                    </div>
                                ) : (
                                    <ScrollArea className="h-62 w-full">
                                        {nearExpMembers.length === 0 ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-3">
                                                <p className="text-gray-700 text-center w-full">Tidak ada member yang mendekati habis.</p>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                                                {nearExpMembers.map((member) => (
                                                    <Card key={member.id} className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-3 cursor-pointer justify-between" onClick={() => handleNearExpMemberClick(member)}>
                                                        <CardContent className="flex flex-col p-2">
                                                            <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                                                            <p className="text-xs text-gray-900">Exp: {member.expiryDate.split("T")[0]}</p>
                                                            <p className="text-xs text-gray-900">Tipe: {member.membership}</p>
                                                        </CardContent>
                                                        <CardFooter className="flex gap-2 justify-end p-2">
                                                            <Button size="sm" variant="outline" className="text-[#7bb3d6] border-[#7bb3d6] hover:bg-[#7bb3d6]/10 cursor-pointer transition-all" onClick={e => { e.stopPropagation(); handleContact(member); }}>
                                                                <Phone className="w-4 h-4"/>
                                                                Contact
                                                            </Button>
                                                        </CardFooter>
                                                    </Card>
                                                ))}
                                            </div>
                                        )}
                                    </ScrollArea>
                                )}
                            </CardContent>
                        </Card>

                        <div className="grid grid-row-4 md:grid-row-4 gap-4">
                            {canCreate && (
                            <Dialog open={isAbsDialogOpen} onOpenChange={setIsAbsDialogOpen}>
                                <DialogTrigger asChild>
                                    <Card className="flex flex-col justify-between shadow-sm bg-white hover:shadow-lg transition-all py-6 px-2 cursor-pointer rounded-xl">
                                        <CardContent className="flex flex-row items-center gap-2">
                                            <CirclePlus className="text-[#7bb3d6]" />
                                            <p className="text-md text-gray-900">Tambah Kedatangan Member</p>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Tambah Kedatangan Member</DialogTitle>
                                        <DialogDescription>
                                            Masukkan detail kedatangan member di sini.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberName" className="text-left">Nama</Label>
                                            <div className="col-span-3">
                                                <MemberSearch members={members} onSelectMember={(id) => setSelectedMemberId(id)} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="absenceType" className="text-left">
                                            Kedatangan
                                            </Label>
                                            <Select value={absenceType} onValueChange={setAbsenceType}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Pilih Tipe Kedatangan" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="GYM">Gym</SelectItem>
                                                <SelectItem value="GYM_PT">Gym + PT</SelectItem>
                                            </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={handleAbsenceSubmit} className="hover:cursor-pointer">
                                            Tambah Kedatangan
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            )}

                            {canCreate && (
                                <Dialog open={isAddMemberDialogOpen} onOpenChange={setIsAddMemberDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Card className="flex flex-col justify-between shadow-sm bg-white hover:shadow-lg transition-all py-6 px-2 cursor-pointer rounded-xl">
                                            <CardContent className="flex flex-row items-center gap-2">
                                                <CirclePlus className="text-[#7bb3d6]" />
                                                <p className="text-md text-gray-900">Tambah Member Baru</p>
                                            </CardContent>
                                        </Card>
                                    </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Tambah Member Baru</DialogTitle>
                                        <DialogDescription>
                                            Masukkan detail member baru di sini.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberName" className="text-left">
                                                Nama
                                            </Label>
                                            <Input id="memberName" value={memberName} onChange={(e) => setMemberName(e.target.value)} placeholder="Nama Lengkap Member" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberNik" className="text-left">
                                                NIK
                                            </Label>
                                            <Input id="memberNik" value={memberNik} onChange={(e) => setMemberNik(e.target.value)} placeholder="NIK Member" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberTelp" className="text-left">
                                                No Telp
                                            </Label>
                                            <Input id="memberTelp" value={memberTelp} onChange={(e) => setMemberTelp(e.target.value)} placeholder="No Telp" className="col-span-3" />
                                        </div>
                                        <div hidden={!(memberType === "couple")} className="grid gap-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="coupleName" className="text-left">
                                                    Nama
                                                </Label>
                                                <Input id="coupleName" value={coupleName} onChange={(e) => setCoupleName(e.target.value)} placeholder="Nama Lengkap Couple" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="coupleNik" className="text-left">
                                                    NIK
                                                </Label>
                                                <Input id="coupleNik" value={coupleNik} onChange={(e) => setCoupleNik(e.target.value)} placeholder="NIK Couple" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="coupleTelp" className="text-left">
                                                    No Telp
                                                </Label>
                                                <Input id="coupleTelp" value={coupleTelp} onChange={(e) => setCoupleTelp(e.target.value)} placeholder="No Telp" className="col-span-3" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberType" className="text-left">
                                                Tipe
                                            </Label>
                                            <Select value={memberType} onValueChange={setMemberType}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih Tipe Member" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="personal">Gym Personal</SelectItem>
                                                    <SelectItem value="couple">Gym Couple</SelectItem>
                                                    <SelectItem value="muayThaiMember">Member Muay Thai</SelectItem>
                                                    <SelectItem value="muayThaiPrivate">Private Muay Thai</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div hidden={!(memberType==="personal" || memberType==="couple")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberDuration" className="text-left">
                                                Durasi
                                            </Label>
                                            <Select value={memberDuration} onValueChange={setMemberDuration}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih Durasi Member" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">1 Bulan</SelectItem>
                                                    <SelectItem value="7">6 Bulan + 1 Free</SelectItem>
                                                    <SelectItem value="15">12 Bulan + 3 Free</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div hidden={!(memberType==="personal" || memberType==="couple")} className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-left">
                                                PT?
                                            </Label>
                                            <Checkbox id="memberPt" checked={memberPt} onCheckedChange={(checked) => setMemberPt(!!checked)} />
                                        </div>
                                        <div hidden={!(memberPt)} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="memberPtAmount" className="text-left">
                                                Jumlah PT
                                            </Label>
                                            <Select value={memberPtAmount} onValueChange={setMemberPtAmount}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih Jumlah PT" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">1 Pertemuan</SelectItem>
                                                    <SelectItem value="4">4 Pertemuan</SelectItem>
                                                    <SelectItem value="6">6 Pertemuan</SelectItem>
                                                    <SelectItem value="8">8 Pertemuan</SelectItem>
                                                    <SelectItem value="10">10 Pertemuan</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div hidden={!(memberType==="personal" || memberType==="couple" || memberType==="muayThaiMember" || memberType==="muayThaiPrivate")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentMethod" className="text-left">
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
                                        <div hidden={!(memberType==="personal" || memberType==="couple" || memberType==="muayThaiMember" || memberType==="muayThaiPrivate")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentAmount" className="text-left">
                                                Nominal
                                            </Label>
                                            <Label htmlFor="paymentAmount" className="text-gray-900 col-span-3">
                                                {`Rp ${getMemberPaymentAmount().toLocaleString()}`}
                                            </Label>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={handleAddMemberSubmit} className="hover:cursor-pointer">
                                            Tambah Member
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            )}

                            {canCreate && (
                                <Dialog open={isAddInsDialogOpen} onOpenChange={setIsAddInsDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Card className="flex flex-col justify-between shadow-sm bg-white hover:shadow-lg transition-all py-6 px-2 cursor-pointer rounded-xl">
                                        <CardContent className="flex flex-row items-center gap-2">
                                            <CirclePlus className="text-[#7bb3d6]" />
                                            <p className="text-md text-gray-900">Tambah Insidentil Baru</p>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Tambah Insidentil</DialogTitle>
                                        <DialogDescription>
                                            Masukkan detail insidentil di sini.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="insName" className="text-left">
                                                Nama
                                            </Label>
                                            <Input id="insName" value={insName} onChange={(e) => setInsName(e.target.value)} placeholder="Nama Customer" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="insType" className="text-left">
                                                Jenis
                                            </Label>
                                            <Select value={insType} onValueChange={setInsType}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih Jenis Insidentil" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="gym">Gym</SelectItem>
                                                    <SelectItem value="kelas">Kelas</SelectItem>
                                                    <SelectItem value="sauna">Sauna</SelectItem>
                                                    <SelectItem value="pt">PT</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div hidden={!(insType === "gym")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="insPt" className="text-left">
                                                PT?
                                            </Label>
                                            <Checkbox id="insPt" checked={insPt} onCheckedChange={(checked) => setInsPt(!!checked)} />
                                            <Label htmlFor="insSauna" className="text-left">
                                                Sauna?
                                            </Label>
                                            <Checkbox id="insSauna" checked={insSauna} onCheckedChange={(checked) => setInsSauna(!!checked)} />
                                        </div>
                                        <div hidden={!(insType === "kelas")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="insClass" className="text-left">
                                                Kelas
                                            </Label>
                                            <Select value={insClass} onValueChange={setInsClass}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih Kelas" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="zumba">Zumba</SelectItem>
                                                    <SelectItem value="bodyFat">Body Fat</SelectItem>
                                                    <SelectItem value="aerobic">Aerobic</SelectItem>
                                                    <SelectItem value="muayThai">Muay Thai</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div hidden={!(insType === "gym" || insType === "kelas" || insType === "sauna" || insType === "pt")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentMethod" className="text-left">
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
                                        <div hidden={!(insType === "gym" || insType === "kelas" || insType === "sauna" || insType === "pt")} className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="paymentAmount" className="text-left">
                                                Nominal
                                            </Label>
                                            <Label htmlFor="paymentAmount" className="text-gray-900 col-span-3">
                                                {`Rp ${getInsPaymentAmount().toLocaleString()}`}
                                            </Label>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={handleAddInsSubmit} className="hover:cursor-pointer">
                                            Tambah Insidentil
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            )}

                            {canCreate && (
                            <Dialog open={isAddTxDialogOpen} onOpenChange={setIsAddTxDialogOpen}>
                                <DialogTrigger asChild>
                                    <Card className="flex flex-col justify-between shadow-sm bg-white hover:shadow-lg transition-all py-6 px-2 cursor-pointer rounded-xl">
                                        <CardContent className="flex flex-row items-center gap-2">
                                            <CirclePlus className="text-[#7bb3d6]" />
                                            <p className="text-md text-gray-900">Tambah Transaksi</p>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Tambah Transaksi</DialogTitle>
                                        <DialogDescription>Masukkan detail transaksi di sini.</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="txType" className="text-left">
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
                                        <div hidden={!(txType === "pengeluaran" || txType === "pemasukan")} className="grid gap-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="txTitle" className="text-left">Judul</Label>
                                                <Input id="txTitle" value={txTitle} onChange={(e) => setTxTitle(e.target.value)} placeholder="Masukkan Judul" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="txNote" className="text-left">Keterangan</Label>
                                                <Input id="txNote" value={txNote} onChange={(e) => setTxNote(e.target.value)} placeholder="Masukkan Keterangan" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="paymentMethod" className="text-left">
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
                                                <Label htmlFor="paymentAmount" className="text-left">
                                                    Nominal
                                                </Label>
                                                <Input id="paymentAmount" type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Nominal Pembayaran" className="w-[50%] col-span-3" />
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
                    </div>

                    <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="flex flex-row gap-2 items-center">
                                    <Info/>
                                    Informasi
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Tidak ada nomor telepon yang tersedia untuk member ini.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <Button onClick={() => setIsAlertDialogOpen(false)} className="hover:cursor-pointer">OK</Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <Dialog open={isNearExpDialogOpen} onOpenChange={setIsNearExpDialogOpen}>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Member Details
                          </DialogTitle>
                          <DialogDescription>
                            Informasi detail tentang member.
                          </DialogDescription>
                        </DialogHeader>
                        {selectedNearExpMember && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label className="text-sm font-medium text-gray-600">Nama</Label>
                                <p className="text-sm font-semibold">{selectedNearExpMember.name}</p>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-600">Expiry Date</Label>
                                <p className="text-sm">{selectedNearExpMember.expiryDate.split("T")[0]}</p>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-600">NIK</Label>
                                <p className="text-sm">{selectedNearExpMember.nik ? selectedNearExpMember.nik : "-"}</p>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-600">Status</Label>
                                <div className="mt-1">{getStatusBadge(selectedNearExpMember.status)}</div>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-600">HP</Label>
                                <p className="text-sm">{selectedNearExpMember.phone ? selectedNearExpMember.phone : "-"}</p>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-600">Membership</Label>
                                <div className="mt-1">{getMembershipBadge(selectedNearExpMember.membership)}</div>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-600">Join Date</Label>
                                <p className="text-sm">{selectedNearExpMember.joinDate.split("T")[0]}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        <DialogFooter className="flex gap-2">
                          {canCreate && (
                          <Button
                            variant="outline"
                            className="flex items-center gap-2 hover:cursor-pointer"
                            onClick={handleNearExpPerpanjangClick}
                          >
                            <Edit className="h-4 w-4" />
                            Perpanjang
                          </Button>
                          )}
                          {canDelete && (
                          <Button
                            variant="destructive"
                            className="flex items-center gap-2 hover:cursor-pointer"
                            onClick={() => setIsNearExpDeleteDialogOpen(true)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </Button>
                          )}
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog open={isNearExpDeleteDialogOpen} onOpenChange={setIsNearExpDeleteDialogOpen}>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Trash2 className="h-5 w-5" />
                            Delete Member
                          </DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this member?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex items-center gap-2 hover:cursor-pointer"
                            onClick={() => setIsNearExpDeleteDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="destructive"
                            className="flex items-center gap-2 hover:cursor-pointer"
                            onClick={handleNearExpDeleteMember}
                          >
                            Continue
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog open={isNearExpPerpanjangDialogOpen} onOpenChange={setIsNearExpPerpanjangDialogOpen}>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Edit className="h-5 w-5" />
                            Perpanjang Member
                          </DialogTitle>
                          <DialogDescription>Perpanjang masa aktif member.</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="perpanjangName" className="text-right">Nama</Label>
                              <Input
                                id="perpanjangName"
                                value={perpanjangName}
                                onChange={e => setPerpanjangName(e.target.value)}
                                placeholder="Nama Lengkap Member"
                                className="col-span-3"
                                disabled
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="perpanjangNik" className="text-right">NIK</Label>
                              <Input
                                id="perpanjangNik"
                                value={perpanjangNik}
                                onChange={e => setPerpanjangNik(e.target.value)}
                                placeholder="NIK Member"
                                className="col-span-3"
                                disabled
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="perpanjangTelp" className="text-right">No Telp</Label>
                              <Input
                                id="perpanjangTelp"
                                value={perpanjangTelp}
                                onChange={e => setPerpanjangTelp(e.target.value)}
                                placeholder="No Telp Member"
                                className="col-span-3"
                                disabled
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="perpanjangType" className="text-right">Tipe</Label>
                              <Select value={perpanjangType} onValueChange={setPerpanjangType}>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Pilih Tipe Member" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="personal">Gym Personal</SelectItem>
                                  <SelectItem value="couple">Gym Couple</SelectItem>
                                  <SelectItem value="muayThaiMember">Member Muay Thai</SelectItem>
                                  <SelectItem value="muayThaiPrivate">Private Muay Thai</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="perpanjangDuration" className="text-right">Perpanjang</Label>
                              <Select value={perpanjangDuration} onValueChange={setPerpanjangDuration}>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Pilih Durasi" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1">1 Bulan</SelectItem>
                                  <SelectItem value="7">6 Bulan + 1 Free</SelectItem>
                                  <SelectItem value="15">12 Bulan + 3 Free</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="perpanjangMethod" className="text-right">Metode</Label>
                              <Select value={perpanjangMethod} onValueChange={setPerpanjangMethod}>
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
                              <Label htmlFor="perpanjangAmount" className="text-right">Nominal</Label>
                              <Label htmlFor="perpanjangAmount" className="text-gray-900 col-span-3">
                                {`Rp ${getPerpanjangAmount().toLocaleString()}`}
                              </Label>
                            </div>
                          </div>
                        </div>
                        <DialogFooter className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setIsNearExpPerpanjangDialogOpen(false)}
                            className="flex items-center gap-2 hover:cursor-pointer"
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="default"
                            onClick={handlePerpanjangSubmit}
                            className="flex items-center gap-2 hover:cursor-pointer"
                        >
                            Perpanjang
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}