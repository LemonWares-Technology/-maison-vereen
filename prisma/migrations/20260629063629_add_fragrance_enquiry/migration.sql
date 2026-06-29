-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'CONTACTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "FragranceEnquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fragrance" TEXT NOT NULL,
    "message" TEXT,
    "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FragranceEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FragranceEnquiry_email_idx" ON "FragranceEnquiry"("email");

-- CreateIndex
CREATE INDEX "FragranceEnquiry_status_idx" ON "FragranceEnquiry"("status");

-- CreateIndex
CREATE INDEX "FragranceEnquiry_createdAt_idx" ON "FragranceEnquiry"("createdAt");
