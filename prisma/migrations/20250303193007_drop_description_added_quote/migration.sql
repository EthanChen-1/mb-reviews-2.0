/*
  Warnings:

  - You are about to drop the column `description` on the `Mouse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mouse" DROP COLUMN "description",
ADD COLUMN     "quote" TEXT NOT NULL DEFAULT '';
