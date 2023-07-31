import {NextRequest, NextResponse} from "next/server";
import {AppResponse} from "@/utils/response";
import {ImageService} from "@/modules/Image";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { id } = await req.json();

    try {
        await ImageService.removeFile(id);

        return AppResponse.json({ success: true });
    } catch (e: any) {
        return AppResponse.json({ success: false, message: e.message });
    }
}