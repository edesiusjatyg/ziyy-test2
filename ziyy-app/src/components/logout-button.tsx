"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"

interface LogoutButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  showUserInfo?: boolean
}

export function LogoutButton({ 
  variant = "outline", 
  size = "sm", 
  showUserInfo = false 
}: LogoutButtonProps) {
  const { data: session } = useSession()

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/signin" })
  }

  if (!session) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      {showUserInfo && (
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4" />
          <span>{session.user.username}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {session.user.role}
          </span>
        </div>
      )}
      <Button
        variant={variant}
        size={size}
        onClick={handleLogout}
        className="flex items-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </div>
  )
}
