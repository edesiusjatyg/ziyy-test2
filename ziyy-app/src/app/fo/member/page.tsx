"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ChevronsRight, Edit, Trash2, User, Undo2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { hasFoCrudAccess } from "@/lib/rbac";

type Member = {
    id: number;
    name: string;
    nik: string;
    phone: string;
    membership: string;
    joinDate: string;
    expiryDate: string;
    status: string;
};

export default function Page() {
    const router = useRouter();
    const { data: session } = useSession();

    // Permission checks
    const canCreate = session?.user?.role ? hasFoCrudAccess(session.user.role, "CREATE") : false;
    const canRead = session?.user?.role ? hasFoCrudAccess(session.user.role, "READ") : false;
    const canUpdate = session?.user?.role ? hasFoCrudAccess(session.user.role, "UPDATE") : false;
    const canDelete = session?.user?.role ? hasFoCrudAccess(session.user.role, "DELETE") : false;

    const [mockMembers, setMockMembers] = useState<Member[]>([]);   
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [memberName, setMemberName] = useState("");
    const [memberNik, setMemberNik] = useState("");
    const [memberTelp, setMemberTelp] = useState("");
    const [memberType, setMemberType] = useState("");

    const [searchQuery, setSearchQuery] = useState("");
    const [show, setShow] = useState(false);
    const [coupleName, setCoupleName] = useState<string>("");

    useEffect(() => { setTimeout(() => {setShow(true)}, 100); }, []);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/members');
                if(!response.ok){
                    throw new Error('Failed to fetch members from DB through API')
                }
                const data = await response.json();
                setMockMembers(data);
            } catch (error) {
                console.error('Error fetching members:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMembers();
    }, []);

    useEffect(() => {
        if (selectedMember && selectedMember.membership.toUpperCase() === "COUPLE") {
            const fetchCouple = async () => {
                try {
                    const response = await fetch(`/api/couples?id=${selectedMember.id}`);
                    if (!response.ok) throw new Error('Failed to fetch couple info');
                    const data = await response.json();
                    setCoupleName(data.coupleName || "");
                } catch (error) {
                    setCoupleName("");
                }
            };
            fetchCouple();
        } else {
            setCoupleName("");
        }
    }, [selectedMember]);

    const handleMemberClick = (member: Member) => {
        setSelectedMember(member);
        setIsDialogOpen(true);
    };

    const handleEditClick = () => {
        if (selectedMember) {
            setMemberName(selectedMember.name);
            setMemberNik(selectedMember.nik);
            setMemberTelp(selectedMember.phone);
            setMemberType(selectedMember.membership);
            setIsEditDialogOpen(true);
        }
    };

    const handleSaveEdit = async () => {
        if (selectedMember) {
            try{
                const response = await fetch('/api/members', {
                    method: 'PUT',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        id: selectedMember.id,
                        name: memberName,
                        nik: memberNik,
                        phone: memberTelp,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to update member (API response)');
                }

                const updatedMember = await response.json();
                setMockMembers(mockMembers.map(member => 
                    member.id === updatedMember.id ? updatedMember : member
                ));

                setIsEditDialogOpen(false);
            } catch (error) {
                console.log('Error saving edit: ', error);
            }
        }
    };

    const handleDeleteMember = async () => {
        if(selectedMember){
            try{
                if (selectedMember.membership.toUpperCase() === "COUPLE") {
                    await fetch('/api/couples', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: selectedMember.id })
                    });
                }

                const response = await fetch('/api/members', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        id: selectedMember.id
                    }),
                });

                if(!response.ok){
                    throw new Error('Failed to delete member (API response)');
                }

                setMockMembers(mockMembers.filter(member => member.id !== selectedMember.id));
                setIsDeleteDialogOpen(false);
                setIsDialogOpen(false);
            } catch(error) {
                console.log('Error deleting member: ', error);
            }
        }
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

    // Filter members by search query
    const filteredMembers = mockMembers.filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Count variables
    const totalMembers = mockMembers.length;
    const activeMembers = mockMembers.filter(m => m.status.toUpperCase() === "ACTIVE").length;
    const expiredMembers = mockMembers.filter(m => m.status.toUpperCase() === "EXPIRED").length;

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full py-8 px-8 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-t-2xl px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
                        <div className="flex items-center gap-2 cursor-pointer z-10" onClick={() => router.push("/fo")}>
                            <Undo2 className="text-white/80 hover:text-white transition-all"/>
                        </div>
                        <h2 className="text-white font-semibold text-xl tracking-tight absolute left-1/2 -translate-x-1/2 z-0">
                            Ziyy Gym | Member
                        </h2>
                        <div className="z-10">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all">
                                            FO
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator></BreadcrumbSeparator>
                                        <BreadcrumbPage className="text-white">Member</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-8 pb-8">
                      <Input
                        type="text"
                        placeholder="Cari nama member..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full max-w-xs bg-white/80 hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#7bb3d6] focus:border-transparent rounded-lg shadow-sm transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-6 gap-4 px-8 pb-4">
                        <Card className="bg-white rounded-xl shadow-sm border-0 h-full">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-center">Total Member</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isLoading ? (
                                    <div className="flex justify-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                    </div>
                                ) : (
                                    <p className="text-lg text-gray-700 text-center">{totalMembers}</p>
                                )}
                            </CardContent>
                        </Card>
                        <Card className="bg-white rounded-xl shadow-sm border-0 h-full">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-center">Member Aktif</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isLoading ? (
                                    <div className="flex justify-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                    </div>
                                ) : (
                                    <p className="text-lg text-green-700 text-center">{activeMembers}</p>
                                )}
                            </CardContent>
                        </Card>
                        <Card className="bg-white rounded-xl shadow-sm border-0 h-full">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-center">Member Expired</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isLoading ? (
                                    <div className="flex justify-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                                    </div>
                                ) : (
                                    <p className="text-lg text-gray-500 text-center">{expiredMembers}</p>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-8 pb-8">
                        {isLoading ? (
                            <div className="flex justify-center col-span-full">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500 mx-auto"></div>
                            </div>
                        ) : (
                            <>
                                {filteredMembers.length === 0 && (
                                    <p className="text-gray-500 col-span-full text-center">Tidak ada member.</p>
                                )}
                                {filteredMembers.sort((a, b) => b.id - a.id).map((member) => (
                                    <Card
                                        key={member.id}
                                        className="cursor-pointer hover:shadow-lg transition-shadow bg-white justify-between"
                                        onClick={() => handleMemberClick(member)}
                                    >
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <User className="w-5 h-5 text-[#7bb3d6]" /> {member.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div>{getStatusBadge(member.status)} {getMembershipBadge(member.membership)}</div>
                                                <div></div>
                                                <div className="text-xs text-gray-500">Berlaku s/d: {member.expiryDate.split("T")[0]}</div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex gap-2 justify-end">
                                            <ChevronsRight className="text-[#7bb3d6] h-4 w-4" />
                                            <p className="text-sm">Detail</p>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </>
                        )}
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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

                            {selectedMember && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-sm font-medium text-gray-600">Nama</Label>
                                            <p className="text-sm font-semibold">{selectedMember.name}</p>
                                        </div>

                                        <div hidden={selectedMember.membership.toUpperCase() !== "COUPLE"}>
                                            <Label className="text-sm font-medium text-gray-600">Nama Couple</Label>
                                            <p className="text-sm font-semibold">{coupleName || '-'}</p>
                                        </div>


                                        <div>
                                            <Label className="text-sm font-medium text-gray-600">Expiry Date</Label>
                                            <p className="text-sm">{selectedMember.expiryDate.split("T")[0]}</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-600">NIK</Label>
                                            <p className="text-sm">{selectedMember.nik ? selectedMember.nik : "-"}</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-600">Status</Label>
                                            <div className="mt-1">
                                              {getStatusBadge(selectedMember.status)}
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-600">HP</Label>
                                            <p className="text-sm">{selectedMember.phone ? selectedMember.phone : "-"}</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-600">Membership</Label>
                                            <div className="mt-1">
                                              {getMembershipBadge(selectedMember.membership)}
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-600">Join Date</Label>
                                            <p className="text-sm">{selectedMember.joinDate.split("T")[0]}</p>
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
                                    onClick={() => setIsDeleteDialogOpen(true)}
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
                                    onClick={() => setIsDeleteDialogOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="destructive"
                                    className="flex items-center gap-2 hover:cursor-pointer"
                                    onClick={handleDeleteMember}
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
                                    Edit Member
                                </DialogTitle>
                                <DialogDescription>Edit member information.</DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4">
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberName" className="text-right">Nama</Label>
                                        <Input
                                            id="memberName"
                                            value={memberName}
                                            onChange={(e) => setMemberName(e.target.value)}
                                            placeholder="Nama Lengkap Member"
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div hidden={memberType.toUpperCase() !== "COUPLE"} className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="coupleName" className="text-right">Nama Couple</Label>
                                        <Input
                                            id="memberName"
                                            value={coupleName}
                                            onChange={(e) => setCoupleName(e.target.value)}
                                            placeholder={coupleName ? "Nama Couple" : "-"}
                                            className="col-span-3"
                                            disabled
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberNik" className="text-right">NIK</Label>
                                        <Input
                                            id="memberNik"
                                            value={memberNik}
                                            onChange={(e) => setMemberNik(e.target.value)}
                                            placeholder="NIK Member"
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberTelp" className="text-right">No Telp</Label>
                                        <Input
                                            id="memberTelp"
                                            value={memberTelp}
                                            onChange={(e) => setMemberTelp(e.target.value)}
                                            placeholder="No Telp Member"
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="memberType" className="text-right">Tipe</Label>
                                        {getMembershipBadge(memberType)}
                                    </div>
                                </div>
                            </div>

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