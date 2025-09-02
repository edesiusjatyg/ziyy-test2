-- AlterEnum
ALTER TYPE "PaymentMethod" ADD VALUE 'TRANSFER_BRI';

-- AlterTable
ALTER TABLE "CanteenItem" ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Incidentile" ADD COLUMN     "phone" TEXT;

-- AlterTable
ALTER TABLE "TxAccounting" ADD COLUMN     "billId" TEXT;

-- AlterTable
ALTER TABLE "TxCanteen" ADD COLUMN     "billId" TEXT;

-- AlterTable
ALTER TABLE "TxFo" ADD COLUMN     "billId" TEXT;
