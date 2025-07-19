import { DefaultSession } from "next-auth"
import { UserRole } from "@/generated/prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      username: string
      role: UserRole
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    username: string
    email: string
    role: UserRole
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string
    role: UserRole
  }
}
