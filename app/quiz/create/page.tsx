import Block from "@/components/Block";
import TextHeader from "@/components/TextHeader";
import Label from "@/components/Label";
import TextInput from "@/components/input/TextInput";

export default async function Create() {
  
  return (
      <>
        <TextHeader>Create Quiz</TextHeader>
        <Block>
            <div>
                <Label>Quiz Name</Label>

                <TextInput
                    placeholder="Quiz Name"
                    className='w-1/2'
                />
            </div>
        </Block>
      </>

  )
}
