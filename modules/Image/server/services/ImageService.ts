import {GENERATE_IMAGE_PATH, GENERATE_IMAGE_URL} from "@/utils/path";
import {createFile, writeFile, pathExists, remove} from "fs-extra";
import {CreateFileException} from "@/modules/Image/server/exceptions/CreateFileException";
import {prisma} from "@/prisma/prisma";
import {Image} from "@prisma/client";
import {FileNotFoundException} from "@/modules/Image/server/exceptions/FileNotFoundException";
export class ImageService {
    static async createFile(imageName: string, imageData: Buffer): Promise<Image> {
        const imagePath = GENERATE_IMAGE_PATH(imageName);
        const imageUrl = GENERATE_IMAGE_URL(imagePath);

        try {
            await createFile(imagePath);
            await writeFile(imagePath, imageData)

            const isFileCreated = await pathExists(imagePath);

            if (!isFileCreated) {
                throw new Error("File wasn't created'");
            }

            const extension = imageName.split('.').pop() || 'jpeg';

            return prisma.image.create({
                data: {
                    name: imageName,
                    path: imagePath,
                    extension: extension,
                    url: imageUrl,
                    type: "image"
                }
            });
        } catch (e: any) {
            throw new CreateFileException(e.message)
        }
    }

    static async removeFile(id: number): Promise<void> {
        const image = await prisma.image.findFirst({
            where: {
                id,
            }
        });

        if(!image) {
            throw new FileNotFoundException();
        }

        const isFileExist = await pathExists(image.path);

        if(!isFileExist) {
            throw new FileNotFoundException();
        }

        await remove(image.path);
    }
}