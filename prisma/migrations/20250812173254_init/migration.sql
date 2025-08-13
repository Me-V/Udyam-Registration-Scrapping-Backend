/*
  Warnings:

  - A unique constraint covering the columns `[aadhaarNumber]` on the table `Registration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aadhaarNumber` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Registration" ADD COLUMN     "aadhaarNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Registration_aadhaarNumber_key" ON "public"."Registration"("aadhaarNumber");
