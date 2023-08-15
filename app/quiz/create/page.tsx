import {QuizCreate} from "@/modules/Quiz/index";
import {prisma} from "@/prisma/prisma";
import QuizAlternativeCreate from "@/modules/Quiz/widgets/QuizAlternativeCreate";

export default async function Create() {
    const quizTypes = await prisma.quizType.findMany({
        orderBy: {id: 'asc'}
    });

    return (
        <>
            {/*<QuizCreate*/}
            {/*    quizTypes={quizTypes}*/}
            {/*/>*/}

            <QuizAlternativeCreate quizTypes={quizTypes} />
        </>
    )
}
