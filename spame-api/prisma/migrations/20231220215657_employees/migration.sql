/*
  Warnings:

  - You are about to drop the column `roleId` on the `Administrator` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `Recepcionist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Administrator" DROP CONSTRAINT "Administrator_fk1";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_fk1";

-- DropForeignKey
ALTER TABLE "Recepcionist" DROP CONSTRAINT "Recepcionist_fk1";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Administrator" DROP COLUMN "roleId";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "roleId";

-- AlterTable
ALTER TABLE "Recepcionist" DROP COLUMN "roleId";

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userId_key" ON "Employee"("userId");

-- AddForeignKey
ALTER TABLE "Administrator" ADD CONSTRAINT "Administrator_fk1" FOREIGN KEY ("patientId") REFERENCES "Employee"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_fk1" FOREIGN KEY ("patientId") REFERENCES "Employee"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Recepcionist" ADD CONSTRAINT "Recepcionist_fk1" FOREIGN KEY ("patientId") REFERENCES "Employee"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
