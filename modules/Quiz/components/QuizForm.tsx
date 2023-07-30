"use client";

import React from "react";
import Label from "@/components/Label";
import TextInput from "@/components/input/TextInput";
import {QuizParams} from "@/modules/Quiz/interfaces/QuizParams";
import SelectInput from "@/components/input/SelectInput";
import Block from "@/components/Block";
import TextareaInput from "@/components/input/TextareaInput";
import ImageLoader from "@/components/ImageLoader";

interface Props {
    quiz: QuizParams,
    setQuiz: (quiz: QuizParams) => void,
    onSubmit: (e: React.FormEvent) => void
}

const QuizForm: React.FC<Props> = ({quiz, setQuiz, onSubmit}) => {

    const setQuizParam = (paramName: keyof QuizParams, value: any) => {
        setQuiz({...quiz, [paramName]: value})
    }

    const options = [{key: 'test', text: 'test'}, {key: 'test1', text: 'test2'}]

    return (
        <div className="flex justify-between gap-4" style={{height: '436px'}}>
            <Block>
                <form onSubmit={onSubmit}>

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
                </form>
            </Block>

            <Block className='px-4 py-8'>
                <ImageLoader />
            </Block>
        </div>
    );
}

export default QuizForm;

