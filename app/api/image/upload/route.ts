import {NextRequest, NextResponse} from "next/server";
import {env} from "@/lib/env.mjs";

export const POST = (req: NextRequest, res: NextResponse) => {
    console.log(env.DATABASE_URL);

    return new Response('test');
}