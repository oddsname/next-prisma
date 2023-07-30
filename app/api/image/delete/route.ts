import formidable from "formidable";
import {env} from "@/lib/env.mjs";
import {NextRequest, NextResponse} from "next/server";

export const POST = (req: NextRequest, res: NextResponse) => {
    console.log(env.DATABASE_URL);



    return new Response('test');
}