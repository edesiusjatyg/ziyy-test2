import { Card, CardTitle, CardContent} from "@/components/ui/card"
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { FolderOpen, MapPinned, Briefcase, DollarSign } from "lucide-react"
import Link from "next/link"

export default function Page(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-500 p-8 flex items-center justify-center">
            <div className="w-[30%]">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-between bg-slate-500/50 rounded-t-2xl pb-4 pt-4 px-6">
                        <h2 className="text-black font-semibold text-xl">Ziyy Gym</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-black hover:text-gray-700">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-2 gap-6 p-6">
                        <Link href="/fo">
                            <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center space-y-4">
                                    <FolderOpen className="w-12 h-12"/>
                                    <p className="text-center text-xl font-semibold">
                                        Front Office
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="acc">
                            <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center space-y-4">
                                    <DollarSign className="w-12 h-12"/>
                                    <p className="text-center text-xl font-semibold">
                                        Accounting
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="mkt">
                            <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center space-y-4">
                                    <MapPinned className="w-12 h-12"/>
                                    <p className="text-center text-xl font-semibold">
                                        Marketing
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="mgmt">
                            <Card className="flex bg-white hover:bg-white/70 p-6 cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center space-y-4">
                                    <Briefcase className="w-12 h-12"/>
                                    <p className="text-center text-xl font-semibold">
                                        Management
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    )
}