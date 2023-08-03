/*
  Warnings:

  - You are about to drop the column `type` on the `Quiz` table. All the data in the column will be lost.
  - Added the required column `type_id` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Quiz` DROP COLUMN `type`,
    ADD COLUMN `type_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `QuizType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `QuizType_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Quiz` ADD CONSTRAINT `Quiz_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `QuizType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
