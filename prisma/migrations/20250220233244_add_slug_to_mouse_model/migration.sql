/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Mouse` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Mouse" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "mouse_slug_idx" ON "Mouse"("slug");
