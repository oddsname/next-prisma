import {NextRequest, NextResponse} from "next/server";
import {randomStr} from "@/utils/random";
import {ImageService} from "@/modules/Image/server";
import {AppResponse} from "@/utils/response";

export const POST = async (req: NextRequest) => {
    const fd = await req.formData()
    const file = fd.get('file') as Blob;

    const extension =  file.type.split('/')[1];
    const imageData = Buffer.from(await file.arrayBuffer());
    const imageName = randomStr(12) + "." + extension;

    try {
        const { id, url } = await ImageService.createFile(imageName, imageData);

        return AppResponse.json({
            id,
            url,
        })
    } catch (e: any) {
        return AppResponse.error(e.message);
    }
}