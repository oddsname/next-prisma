"use client";

import React, {useState} from "react";
import Label from "@/components/Label";
import TextInput from "@/components/input/TextInput";
import {QuizParams} from "@/modules/Quiz/interfaces/QuizParams";
import SelectInput from "@/components/input/SelectInput";
import Block from "@/components/Block";
import TextareaInput from "@/components/input/TextareaInput";
import {ImageApi, ImageLoader, ImgParams} from "@/modules/Image/index";
import Button from "@/components/Button";

interface Props {
    quiz: QuizParams,
    setQuiz: (quiz: QuizParams) => void,
    onSave: (e: React.FormEvent) => void
}

const QuizForm: React.FC<Props> = ({quiz, setQuiz, onSave}) => {
    const [img, setImg] = useState<ImgParams>({});
    const setQuizParam = (paramName: keyof QuizParams, value: any) => {
        setQuiz({...quiz, [paramName]: value})
    }

    const setQuizImg = (img: ImgParams) => {
        setImg(img);
        setQuiz({...quiz, image_id: img.id})
    }

    const onFileChange = async (file: File) => {
        const quizImg = await ImageApi.createFile(file);

        setQuizImg(quizImg);
    }

    const onFileDelete = async (img: ImgParams) => {
        if(img.id) {
            const { success } = await ImageApi.deleteFile(img.id);

            if(success) {
                setQuizImg({});
            }

            return { success }
        }

        return { success: false }
    }

    const onCancelClick = async () => {
        if(quiz.image_id) {
            await ImageApi.deleteFile(quiz.image_id);
        }

        setQuiz({});
    }

    const onSaveClick = () => {

    }

    const options = [{key: 'test', text: 'test'}, {key: 'test1', text: 'test2'}]

    return (
        <div>
            <div className="flex justify-between gap-4" style={{height: '436px'}}>
                <Block>
                    <div className='pt-4'>
                        <Label>
                            Name
                        </Label>

                        <TextInput
                            value={quiz.name}
                            onChange={(e) => setQuizParam('name', e.target.value)}
                            placeholder='Quiz name'
                            className='w-full'
                        />
                    </div>

                    <div className='pt-4'>
                        <Label>
                            Type
                        </Label>

                        <SelectInput
                            options={options}
                            value={quiz.type}
                            onChange={(e) => setQuizParam('type', e.target.value)}
                            className='w-full'
                        />
                    </div>

                    <div className='pt-4'>
                        <Label>
                            Description
                        </Label>

                        <TextareaInput
                            value={quiz.description}
                            onChange={(e) => setQuizParam('description', e.target.value)}
                            placeholder="Write quiz description..."
                        />
                    </div>
                </Block>

                <Block className='px-4 py-8'>
                    <ImageLoader
                        img={img}
                        setImg={setQuizImg}
                        onDelete={onFileDelete}
                        onChange={onFileChange}
                    />
                </Block>
            </div>

            <div className="mt-4 flex justify-end gap-6">
                <Button type="danger" onClick={onCancelClick}>
                    Cancel
                </Button>

                <Button type="primary" onClick={onSaveClick}>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default QuizForm;

