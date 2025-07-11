-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'TRANSFER', 'DEBIT_BRI', 'QRIS_BRI', 'DEBIT_MANDIRI', 'QRIS_MANDIRI', 'EDC_MANDIRI', 'TRANSFER_MANDIRI');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('PERSONAL', 'COUPLE', 'MUAY_THAI_MEMBER', 'MUAY_THAI_PRIVATE');

-- CreateEnum
CREATE TYPE "MemberStatus" AS ENUM ('ACTIVE', 'NEAR_EXPIRY', 'EXPIRED');

-- CreateEnum
CREATE TYPE "ArrivalType" AS ENUM ('GYM', 'GYM_PT');

-- CreateEnum
CREATE TYPE "IncidentileType" AS ENUM ('GYM', 'KELAS', 'SAUNA', 'PT');

-- CreateEnum
CREATE TYPE "IncidentileClass" AS ENUM ('ZUMBA', 'BODY_FAT', 'AEROBIC', 'MUAY_THAI', 'POUND_FIT', 'STRONG_NATION', 'YOGA');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('PEMASUKAN', 'PENGELUARAN');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'SUPERVISOR', 'FRONT_OFFICE', 'CANTEEN', 'ACCOUNTING', 'MARKETING');

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "membership" "MembershipType" NOT NULL,
    "ptAmount" INTEGER,
    "joinDate" TIMESTAMP(3) NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "status" "MemberStatus" NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Couple" (
    "id" SERIAL NOT NULL,
    "member1Id" INTEGER NOT NULL,
    "member2Id" INTEGER NOT NULL,

    CONSTRAINT "Couple_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberArrival" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "arrivalDate" TIMESTAMP(3) NOT NULL,
    "arrivalType" "ArrivalType" NOT NULL,

    CONSTRAINT "MemberArrival_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incidentile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "IncidentileType" NOT NULL,
    "class" "IncidentileClass",
    "pt" BOOLEAN NOT NULL,
    "sauna" BOOLEAN NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "paymentAmount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Incidentile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TxFo" (
    "id" SERIAL NOT NULL,
    "type" "TransactionType" NOT NULL,
    "title" TEXT,
    "note" TEXT,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "paymentAmount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TxFo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TxCanteen" (
    "id" SERIAL NOT NULL,
    "type" "TransactionType" NOT NULL,
    "title" TEXT,
    "note" TEXT,
    "itemId" INTEGER,
    "itemAmount" INTEGER,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "paymentAmount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TxCanteen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TxAccounting" (
    "id" SERIAL NOT NULL,
    "type" "TransactionType" NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "paymentAmount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TxAccounting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "kpi" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityMarketing" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "campaignId" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityMarketing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CanteenItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CanteenItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserActions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,

    CONSTRAINT "UserActions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_member1Id_fkey" FOREIGN KEY ("member1Id") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_member2Id_fkey" FOREIGN KEY ("member2Id") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberArrival" ADD CONSTRAINT "MemberArrival_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TxCanteen" ADD CONSTRAINT "TxCanteen_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "CanteenItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityMarketing" ADD CONSTRAINT "ActivityMarketing_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActions" ADD CONSTRAINT "UserActions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
