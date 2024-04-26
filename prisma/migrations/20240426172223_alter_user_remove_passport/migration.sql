/*
  Warnings:

  - You are about to drop the column `passport` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_passport_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "passport";
