import { PrismaClient } from "@/generated/prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function seedUsers() {
  // Create default admin user
  const hashedPassword = await bcrypt.hash("123", 10)
  
  const admin = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      email: "admin@ziyyy.gym",
      passwordHash: hashedPassword,
      role: "ADMIN",
    },
  })

  // Create sample users for different roles
  const users = [
    {
      username: "frontoffice",
      email: "fo@ziyyy.gym",
      password: "123",
      role: "FRONT_OFFICE" as const,
    },
    {
      username: "canteen",
      email: "canteen@ziyyy.gym",
      password: "123",
      role: "CANTEEN" as const,
    },
    {
      username: "accounting",
      email: "accounting@ziyyy.gym",
      password: "123",
      role: "ACCOUNTING" as const,
    },
    {
      username: "marketing",
      email: "marketing@ziyyy.gym",
      password: "123",
      role: "MARKETING" as const,
    },
    {
      username: "supervisor",
      email: "supervisor@ziyyy.gym",
      password: "123",
      role: "SUPERVISOR" as const,
    },
  ]

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    await prisma.user.upsert({
      where: { username: user.username },
      update: {},
      create: {
        username: user.username,
        email: user.email,
        passwordHash: hashedPassword,
        role: user.role,
      },
    })
  }

  console.log("Users seeded successfully!")
}

seedUsers()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
