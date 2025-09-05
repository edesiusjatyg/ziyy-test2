-- CreateTable
CREATE TABLE "SaunaUsage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "startTime" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),

    CONSTRAINT "SaunaUsage_pkey" PRIMARY KEY ("id")
);
