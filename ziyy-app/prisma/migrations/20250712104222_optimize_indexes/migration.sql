/*
  Warnings:

  - A unique constraint covering the columns `[name,price]` on the table `CanteenItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "ActivityMarketing_username_idx" ON "ActivityMarketing"("username");

-- CreateIndex
CREATE INDEX "ActivityMarketing_campaignId_idx" ON "ActivityMarketing"("campaignId");

-- CreateIndex
CREATE INDEX "ActivityMarketing_date_idx" ON "ActivityMarketing"("date");

-- CreateIndex
CREATE INDEX "Campaign_status_idx" ON "Campaign"("status");

-- CreateIndex
CREATE INDEX "Campaign_startDate_idx" ON "Campaign"("startDate");

-- CreateIndex
CREATE INDEX "Campaign_endDate_idx" ON "Campaign"("endDate");

-- CreateIndex
CREATE INDEX "CanteenItem_name_idx" ON "CanteenItem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CanteenItem_name_price_key" ON "CanteenItem"("name", "price");

-- CreateIndex
CREATE INDEX "Incidentile_date_idx" ON "Incidentile"("date");

-- CreateIndex
CREATE INDEX "Incidentile_type_idx" ON "Incidentile"("type");

-- CreateIndex
CREATE INDEX "Incidentile_name_idx" ON "Incidentile"("name");

-- CreateIndex
CREATE INDEX "Member_name_idx" ON "Member"("name");

-- CreateIndex
CREATE INDEX "Member_nik_idx" ON "Member"("nik");

-- CreateIndex
CREATE INDEX "Member_phone_idx" ON "Member"("phone");

-- CreateIndex
CREATE INDEX "Member_status_expiryDate_idx" ON "Member"("status", "expiryDate");

-- CreateIndex
CREATE INDEX "MemberArrival_memberId_idx" ON "MemberArrival"("memberId");

-- CreateIndex
CREATE INDEX "MemberArrival_arrivalDate_idx" ON "MemberArrival"("arrivalDate");

-- CreateIndex
CREATE INDEX "MemberArrival_arrivalDate_memberId_idx" ON "MemberArrival"("arrivalDate", "memberId");

-- CreateIndex
CREATE INDEX "TxAccounting_type_idx" ON "TxAccounting"("type");

-- CreateIndex
CREATE INDEX "TxAccounting_date_idx" ON "TxAccounting"("date");

-- CreateIndex
CREATE INDEX "TxAccounting_date_type_idx" ON "TxAccounting"("date", "type");

-- CreateIndex
CREATE INDEX "TxCanteen_type_idx" ON "TxCanteen"("type");

-- CreateIndex
CREATE INDEX "TxCanteen_itemId_idx" ON "TxCanteen"("itemId");

-- CreateIndex
CREATE INDEX "TxCanteen_date_idx" ON "TxCanteen"("date");

-- CreateIndex
CREATE INDEX "TxCanteen_date_type_idx" ON "TxCanteen"("date", "type");

-- CreateIndex
CREATE INDEX "TxFo_type_idx" ON "TxFo"("type");

-- CreateIndex
CREATE INDEX "TxFo_date_idx" ON "TxFo"("date");

-- CreateIndex
CREATE INDEX "TxFo_date_type_idx" ON "TxFo"("date", "type");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "UserActions_userId_idx" ON "UserActions"("userId");

-- CreateIndex
CREATE INDEX "UserActions_userId_time_idx" ON "UserActions"("userId", "time");
