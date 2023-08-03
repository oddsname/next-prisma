import {QuizCreate} from "@/modules/Quiz/index";
import {prisma} from "@/prisma/prisma";

export default async function Create() {
    const quizTypes = await prisma.quizType.findMany({
        orderBy: {id: 'asc'}
    });

    return (
        <>
            <QuizCreate
                quizTypes={quizTypes}
            />
        </>
    )
}
