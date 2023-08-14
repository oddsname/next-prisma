import Block from '@/components/Block'
import TextHeader from '@/components/TextHeader'
import {prisma} from '@/prisma/prisma'
import {QuizSearch} from "@/modules/Quiz";
import {TabSwitcher, TabContent, TabHeader} from "@/components/TabSwitcher";

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

                <div className="mt-4 mx-4">
                    <TabSwitcher>
                        <TabHeader value='a'> Test 1</TabHeader>
                        <TabHeader value='b' active> Test 2</TabHeader>

                        <TabContent value='a'>Content 1</TabContent>
                        <TabContent value='b'>Content 2</TabContent>
                    </TabSwitcher>
                </div>
            </Block>
        </>
    )
}
