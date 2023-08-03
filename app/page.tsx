import Block from '@/components/Block'
import TextHeader from '@/components/TextHeader'
import {prisma} from '@/prisma/prisma'
import {QuizSearch} from "@/modules/Quiz";

export default async function Home() {
    return (
        <>
            <TextHeader>
                Discover Your Preferences
            </TextHeader>

            <Block>
                <div className="mt-4">
                    <QuizSearch />
                </div>

                <div className="mt-4">

                </div>
            </Block>
        </>
    )
}
