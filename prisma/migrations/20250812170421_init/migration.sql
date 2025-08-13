/*
  Warnings:

  - The primary key for the `Registration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `aadhaarNumber` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Registration` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Registration_aadhaarNumber_key";

-- AlterTable
ALTER TABLE "public"."Registration" DROP CONSTRAINT "Registration_pkey",
DROP COLUMN "aadhaarNumber",
DROP COLUMN "createdAt",
DROP COLUMN "id";
