import {env} from "@/lib/env.mjs";
import {NextRequest, NextResponse} from "next/server";
import { createFile, writeFile } from "fs-extra";
import { GENERATE_IMAGE_PATH, GENERATE_IMAGE_URL } from "@/lib/path";
import {RANDOM_STR} from "@/lib/random";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const fd = await req.formData()
    const file = fd.get('file') as Blob;

    const imageData = Buffer.from(await file.arrayBuffer());

    const imageName = RANDOM_STR(12) + ".jpg";
    const imagePath = GENERATE_IMAGE_PATH(imageName);
    const imageUrl = GENERATE_IMAGE_URL(imagePath);

    try {
        await createFile(imagePath);
        await writeFile(imagePath, imageData)
    } catch (e: unknown) {
        if(e instanceof Error) {
            return new Response(e.message, { status: 500 })
        }
    }

    return new Response(JSON.stringify({
        path: imageUrl,
        id: 1,
    }));
}