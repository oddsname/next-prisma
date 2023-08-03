import {prisma} from "../../prisma";
import {SeederInterface} from "../SeederInterface";

export class QuizTypeSeeder implements SeederInterface {
    async seed() {
        await prisma.quizType.deleteMany();
        await prisma.quizType.createMany({
            data: [
                {id: 1, type: 'simple'},
                {id: 2, type: 'complicated'},
                {id: 3, type: 'test'}
            ]
        });
    }
}