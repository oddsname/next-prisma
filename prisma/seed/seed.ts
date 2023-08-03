import {prisma} from "./../prisma";
import {SeederInterface} from "./SeederInterface";
import {QuizTypeSeeder} from "./seeders/QuizTypeSeeder";

const seeders: SeederInterface[] = [
    new QuizTypeSeeder()
];

const main = async () => {
    for(let seeder of seeders) {
        await seeder.seed()
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    }).catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })