-- AlterTable
ALTER TABLE "public"."Registration" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Registration_pkey" PRIMARY KEY ("id");
