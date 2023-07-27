import Block from "@/components/Block";
import TextHeader from "@/components/TextHeader";
import Label from "@/components/Label";
import TextInput from "@/components/input/TextInput";
import {QuizCreate} from "@/modules/Quiz/index";

export default async function Create() {
  
  return (
      <>
        <TextHeader>Create Quiz</TextHeader>
        <Block>
            <QuizCreate />
        </Block>
      </>

  )
}
