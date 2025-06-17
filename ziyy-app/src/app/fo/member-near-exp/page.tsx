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
    const [mockMembers, setMockMembers] = useState<Member[]>([]);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const [memberName, setMemberName] = useState("");
    const [memberNik, setMemberNik] = useState("");
    const [memberTelp, setMemberTelp] = useState("");
    const [memberType, setMemberType] = useState("");

    useEffect(() => {
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
                    <BreadcrumbPage>Member Mendekati Habis</BreadcrumbPage>
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
                  <CardTitle>Member Mendekati Habis</CardTitle>
                  <CardDescription>
                    Klik pada nama member untuk melihat detailnya.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nama</TableHead>
                        <TableHead>Membership</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Expiry Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockMembers.map((member) => (
                        <TableRow
                          key={member.id}
                          className="cursor-pointer hover:bg-gray-50"
                          onClick={() => handleMemberClick(member)}
                        >
                          <TableCell className="font-semibold">
                            {member.name}
                          </TableCell>
                          <TableCell>
                            {getMembershipBadge(member.membership)}
                          </TableCell>
                          <TableCell>{getStatusBadge(member.status)}</TableCell>
                          <TableCell>{member.expiryDate}</TableCell>
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
    );
}