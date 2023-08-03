import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma";
import {AppResponse} from "@/utils/response";

export const GET = async (req: NextRequest, res: NextResponse) => {
    const quizTypes = await prisma.quizType.findMany();

    return AppResponse.json(quizTypes);
}