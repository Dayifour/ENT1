/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `role_nom_key` ON `role`(`nom`);
