import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaClient } from "./generated/prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        try {
          const user = await prisma.user.findUnique({
            where: { username: credentials.username as string }
          })

          if (!user) {
            console.log("User not found:", credentials.username)
            return null
          }

          const isValidPassword = await bcrypt.compare(
            credentials.password as string, 
            user.passwordHash
          )

          if (!isValidPassword) {
            console.log("Invalid password for user:", credentials.username)
            return null
          }

          // Update last login time
          await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() }
          })

          console.log("User logged in successfully:", credentials.username)

          // Return user object - DO NOT automatically assign admin role
          return {
            id: user.id.toString(),
            username: user.username || "",
            email: user.email || "",
            role: user.role, // Use the role from database, don't override
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as any
        session.user.username = token.username as string
      }
      return session
    }
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60, // 2 hours
  }
})