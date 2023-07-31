/*
  Warnings:

  - You are about to drop the `QuizForm` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[path]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `QuizForm` DROP FOREIGN KEY `QuizForm_quiz_id_fkey`;

-- DropTable
DROP TABLE `QuizForm`;

-- CreateIndex
CREATE UNIQUE INDEX `Image_path_key` ON `Image`(`path`);
