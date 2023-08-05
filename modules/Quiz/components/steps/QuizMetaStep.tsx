import React, {useEffect, useState} from "react";
import Block from "@/components/Block";
import TextHeader from "@/components/TextHeader";
import TextInput from "@/components/input/TextInput";
import {useInput} from "@/hooks/useInput";
import Label from "@/components/Label";
import TextareaInput from "@/components/input/TextareaInput";
import {ImageLoader, ImgParams} from "@/modules/Image";
import Button from "@/components/Button";
import {useCreateQuizStore} from "@/modules/Quiz/store/CreateQuizStore";
import { required, maxLength } from "@/hooks/useValidation";
import ErrorMessage from "@/components/ErrorMessage";

interface Props {

}

const QuizMetaStep: React.FC<Props> = () => {
    const { setQuiz, quiz } = useCreateQuizStore();

    const nameInput = useInput<HTMLInputElement>('', [
        required(),
        maxLength(5)
    ]);

    const descInput = useInput<HTMLTextAreaElement>('', [
        required(),
        maxLength(500),
    ]);

    const [img, setImg] = useState<ImgParams>({});

    useEffect(() => saveQuizMetaData(), [nameInput.value, descInput.value, img]);

    const saveQuizMetaData = () => {
        setQuiz({
            name: nameInput.value,
            description: descInput.value,
        })
    }

    const onChangeImage = async (file: File) => {

    }

    const onDeleteImage = async (img: ImgParams) => {

        return { success: true }
    }

    return (
        <div>
            <TextHeader>Quiz Metadata</TextHeader>

            <Block className="px-8 py-6">
                <div className="flex justify-between">
                    <div className="w-2/5">
                        <div>
                            <Label>
                                Quiz Name
                            </Label>

                            <TextInput placeholder="Quiz Name" {...nameInput} />
                            <ErrorMessage>{nameInput.error}</ErrorMessage>
                        </div>


                        <div className="mt-6">
                            <Label>
                                Quiz Description
                            </Label>

                            <TextareaInput placeholder="Quiz Description" {...descInput} />
                            <ErrorMessage>{descInput.error}</ErrorMessage>
                        </div>
                    </div>

                    <div className="w-2/5 mr-4">
                        <ImageLoader
                            img={img}
                            setImg={setImg}
                            onChange={onChangeImage}
                            onDelete={onDeleteImage}
                        />
                    </div>

                </div>

                <div className="mt-8 flex justify-center">
                    <Button type="blue">Preview</Button>
                </div>
            </Block>
        </div>

    );
}

export default QuizMetaStep;