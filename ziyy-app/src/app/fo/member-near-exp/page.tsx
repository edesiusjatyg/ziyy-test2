"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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

    const [memberName, setMemberName] = useState("");
    const [memberNik, setMemberNik] = useState("");
    const [memberTelp, setMemberTelp] = useState("");
    const [memberType, setMemberType] = useState("");

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {setShow(true)}, 100);

        const fetchMembers = async () => {
            try {
                const response = await fetch('/members.json');
                const data = await response.json();

                const nearExpMembers = data.members.filter((member: Member) => {
                    return member.status.toLowerCase() === "nearexp";
                });

                setMockMembers(nearExpMembers);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, []);

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

    const handleSaveEdit = () => {
        if (selectedMember) {
            selectedMember.name = memberName;
            selectedMember.nik = memberNik;
            selectedMember.phone = memberTelp;
            for(let i = 0; i < mockMembers.length; i++) {
                if (mockMembers[i].id === selectedMember.id) {
                    mockMembers[i] = selectedMember;
                    break;
                }
            }
            setIsEditDialogOpen(false);
        }
    };

    const handleDeleteMember = () => {
        if(selectedMember){
            const updatedMembers = mockMembers.filter(
                (member) => member.id !== selectedMember.id
            );

            setMockMembers(updatedMembers);
            setIsDeleteDialogOpen(false);
            setIsDialogOpen(false);
        }
    };

    const handleContact = (member: Member) => {
        window.open(`https://wa.me/${member.phone.replace(/^0/, '62')}`);
    };

    const getStatusBadge = (status: string) => {
        if (status === "Active") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aktif</Badge>;
        } else if (status === "NearExp") {
            return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Akan Habis</Badge>;
        } else if (status === "Exp") {
            return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Expired</Badge>;
        }
    };

    const getMembershipBadge = (membership: string) => {
        if (membership === "Personal") {
            return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Personal</Badge>;
        } else if (membership === "Couple") {
            return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Couple</Badge>;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
            <div className={`w-full max-w-6xl py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
                <div className="w-full max-w-6xl py-4 md:py-8">
                    <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
                        <div className="flex items-center rounded-t-2xl px-4 md:px-8 py-4 mb-8 relative" style={{ background: '#7bb3d6' }}>
                            {/* Left: Back Button - Fixed Width */}
                            <div className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-all w-40 justify-start" onClick={() => router.push("/fo")}>
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
                            <div className="w-40 flex justify-end">
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/fo" className="text-white/80 hover:text-white transition-all text-sm md:text-base">
                                                FO
                                            </BreadcrumbLink>
                                            <BreadcrumbSeparator></BreadcrumbSeparator>
                                            <BreadcrumbPage className="text-white text-sm md:text-base">Member Mendekati Habis</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pb-8">
                            {mockMembers.length === 0 && (
                                <p className="text-gray-500 col-span-full text-center">Tidak ada member mendekati habis.</p>
                            )}
                            {mockMembers.map((member) => (
                                <Card key={member.id} className="cursor-pointer hover:shadow-lg transition-shadow bg-white" onClick={() => handleMemberClick(member)}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <User className="w-5 h-5 text-[#7bb3d6]" /> {member.name}
                                        </CardTitle>
                                        <CardDescription className="text-xs text-gray-500">NIK: {member.nik}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <div>{getMembershipBadge(member.membership)}</div>
                                            <div className="text-xs text-gray-500">Berlaku s/d: {member.expiryDate}</div>
                                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Akan Habis</Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2 justify-end">
                                        <Button size="sm" variant="outline" className="text-[#7bb3d6] border-[#7bb3d6] hover:bg-[#7bb3d6]/10 cursor-pointer" onClick={e => { e.stopPropagation(); handleContact(member); }}>
                                            Contact
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
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
                    <Label className="text-sm font-medium text-gray-600">
                      Nama
                    </Label>
                    <p className="text-sm font-semibold">
                      {selectedMember.name}
                    </p>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      Expiry Date
                    </Label>
                    <p className="text-sm">{selectedMember.expiryDate}</p>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      NIK
                    </Label>
                    <p className="text-sm">{selectedMember.nik}</p>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      Status
                    </Label>
                    <div className="mt-1">
                      {getStatusBadge(selectedMember.status)}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      HP
                    </Label>
                    <p className="text-sm">{selectedMember.phone}</p>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      Membership
                    </Label>
                    <div className="mt-1">
                      {getMembershipBadge(selectedMember.membership)}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      Join Date
                    </Label>
                    <p className="text-sm">{selectedMember.joinDate}</p>
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
                onClick={() => {
                  setIsDeleteDialogOpen(false);
                }}
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
                    <Label htmlFor="memberName" className="text-right">
                        Nama
                    </Label>
                    <Input
                        id="memberName"
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                        placeholder="Nama Lengkap Member"
                        className="col-span-3"
                    />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="memberNik" className="text-right">
                        NIK
                    </Label>
                    <Input
                        id="memberNik"
                        value={memberNik}
                        onChange={(e) => setMemberNik(e.target.value)}
                        placeholder="NIK Member"
                        className="col-span-3"
                    />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="memberTelp" className="text-right">
                        No Telp
                    </Label>
                    <Input
                        id="memberTelp"
                        value={memberTelp}
                        onChange={(e) => setMemberTelp(e.target.value)}
                        placeholder="No Telp Member"
                        className="col-span-3"
                    />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="memberType" className="text-right">
                        Tipe
                    </Label>
                    <Input
                        id="memberType"
                        value={memberType}
                        onChange={(e) => setMemberType(e.target.value)}
                        placeholder="Jenis Member"
                        className="col-span-3"
                        disabled
                    />
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
        </div>
    </div>
    );
}