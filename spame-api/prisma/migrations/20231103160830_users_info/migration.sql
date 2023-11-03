/*
  Warnings:

  - Added the required column `age` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "rg" TEXT NOT NULL;
