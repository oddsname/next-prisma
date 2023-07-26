/*
  Warnings:

  - Added the required column `image_id` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Quiz` ADD COLUMN `image_id` INTEGER NOT NULL,
    MODIFY `description` MEDIUMTEXT NOT NULL;

-- AddForeignKey
ALTER TABLE `Quiz` ADD CONSTRAINT `Quiz_image_id_fkey` FOREIGN KEY (`image_id`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
