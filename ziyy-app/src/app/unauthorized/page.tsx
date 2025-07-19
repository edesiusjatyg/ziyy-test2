"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldX, Home, LogIn } from "lucide-react"
import Link from "next/link"
import { getRoleDisplayName } from "@/lib/rbac"

export default function UnauthorizedPage() {
  const [show, setShow] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    setTimeout(() => {setShow(true)}, 100)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
      <div className={`w-full max-w-lg py-8 px-4 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)' }}>
          <div className="flex flex-col items-center justify-center rounded-t-2xl px-8 py-6 mb-6" style={{ background: '#7bb3d6' }}>
            <h2 className="text-white font-semibold text-xl tracking-tight">
              Ziyy Gym
            </h2>
            <p className="text-white/80 text-sm mt-1">
              Access Control
            </p>
          </div>

          <div className="px-8 pb-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="bg-red-100 p-4 rounded-full">
                  <ShieldX className="w-12 h-12 text-red-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Akses Ditolak</h3>
                <p className="text-gray-600 text-md">
                  Anda tidak memiliki izin untuk mengakses halaman ini.
                </p>
              </div>

              {session && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Username: <span className="font-medium text-gray-800">{session.user.username}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Role: <span className="font-medium text-gray-800">{getRoleDisplayName(session.user.role)}</span>
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <Link href="/home" className="w-full">
                  <Button className="w-full bg-[#7bb3d6] hover:bg-[#6ba3c4] text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-200 cursor-pointer">
                    <Home className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                  </Button>
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Contact your administrator if you believe this is an error
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
