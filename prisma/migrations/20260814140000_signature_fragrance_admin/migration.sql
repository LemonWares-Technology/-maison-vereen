-- AlterTable
ALTER TABLE "FragranceEnquiry" ADD COLUMN "phone" TEXT;
ALTER TABLE "FragranceEnquiry" ADD COLUMN "fragranceNo" TEXT;

-- CreateTable
CREATE TABLE "SignatureFragrance" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL DEFAULT '',
    "sortOrder" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SignatureFragrance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SignatureFragrance_slug_key" ON "SignatureFragrance"("slug");

-- CreateIndex
CREATE INDEX "SignatureFragrance_sortOrder_idx" ON "SignatureFragrance"("sortOrder");

-- CreateIndex
CREATE INDEX "SignatureFragrance_published_idx" ON "SignatureFragrance"("published");
