/*
  Warnings:

  - You are about to alter the column `name` on the `crops` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `variety` on the `crops` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to drop the column `address` on the `farms` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `farms` table. All the data in the column will be lost.
  - You are about to drop the column `ownerName` on the `farms` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `farms` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `description` on the `field_logs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `inventory_items` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `category` on the `inventory_items` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `unit` on the `inventory_items` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `name` on the `plots` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `soilType` on the `plots` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - The `status` column on the `seasons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `expenses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `farms` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `farms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unity` to the `farms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `field_logs` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `field_logs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `farmId` to the `inventory_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unity` to the `plots` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MANAGER', 'WORKER', 'OWNER');

-- CreateEnum
CREATE TYPE "SeasonStatus" AS ENUM ('PLANTED', 'GROWING', 'HARVESTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('BRL', 'MUMBUCA', 'DOLAR', 'EURO');

-- CreateEnum
CREATE TYPE "LogCategory" AS ENUM ('WEATHER', 'PEST', 'EMERGENCY', 'OBSERVATION');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- DropForeignKey
ALTER TABLE "plots" DROP CONSTRAINT "plots_farmId_fkey";

-- AlterTable
ALTER TABLE "crops" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "observation" VARCHAR(255),
ADD COLUMN     "photo" TEXT,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "variety" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "farms" DROP COLUMN "address",
DROP COLUMN "location",
DROP COLUMN "ownerName",
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "observation" VARCHAR(255),
ADD COLUMN     "photo" TEXT,
ADD COLUMN     "resume" VARCHAR(255),
ADD COLUMN     "unity" VARCHAR(10) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(150);

-- AlterTable
ALTER TABLE "field_logs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255),
DROP COLUMN "category",
ADD COLUMN     "category" "LogCategory" NOT NULL;

-- AlterTable
ALTER TABLE "inventory_items" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "farmId" TEXT NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "category" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "unit" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "plots" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "observation" VARCHAR(255),
ADD COLUMN     "photo" TEXT,
ADD COLUMN     "unity" VARCHAR(10) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "soilType" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "seasons" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "photo" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "SeasonStatus" NOT NULL DEFAULT 'PLANTED';

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "expenses";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(35) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peoples" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "cellphone" VARCHAR(20),
    "role" "Role" NOT NULL DEFAULT 'WORKER',
    "photo" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "peoples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "managers" (
    "id" TEXT NOT NULL,
    "peopleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "managers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "street" VARCHAR(60),
    "number" INTEGER,
    "complement" VARCHAR(40),
    "neighborhood" VARCHAR(100),
    "city" VARCHAR(100) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "country" VARCHAR(50) NOT NULL DEFAULT 'Brasil',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people_on_farms" (
    "peopleId" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "people_on_farms_pkey" PRIMARY KEY ("peopleId","farmId")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'BRL',
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" VARCHAR(100),
    "managerId" TEXT NOT NULL,
    "seasonId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finances" (
    "id" TEXT NOT NULL,
    "balance" DECIMAL(15,2) NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'BRL',
    "managerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "finances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "peoples_userId_key" ON "peoples"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "managers_peopleId_key" ON "managers"("peopleId");

-- CreateIndex
CREATE UNIQUE INDEX "finances_managerId_key" ON "finances"("managerId");

-- CreateIndex
CREATE UNIQUE INDEX "farms_addressId_key" ON "farms"("addressId");

-- AddForeignKey
ALTER TABLE "peoples" ADD CONSTRAINT "peoples_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "managers" ADD CONSTRAINT "managers_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "peoples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farms" ADD CONSTRAINT "farms_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "people_on_farms" ADD CONSTRAINT "people_on_farms_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "peoples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "people_on_farms" ADD CONSTRAINT "people_on_farms_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plots" ADD CONSTRAINT "plots_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_items" ADD CONSTRAINT "inventory_items_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "managers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "seasons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finances" ADD CONSTRAINT "finances_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "managers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
