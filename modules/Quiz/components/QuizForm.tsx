"use client";

import React from "react";
import Label from "@/components/Label";
import TextInput from "@/components/input/TextInput";
import {QuizParams} from "@/modules/Quiz/interfaces/QuizParams";

interface Props {
    quiz: QuizParams,
    setQuiz: (quiz: QuizParams) => void,
    onSubmit: (e: React.FormEvent) => void
}

const QuizForm: React.FC<Props> = ({ quiz, setQuiz, onSubmit}) => {

    const setQuizParam = (paramName: keyof QuizParams, value: any) => {
        setQuiz({...quiz, [paramName]: value})
    }

    return (
        <form onSubmit={onSubmit}>

            <div className='pt-4'>
                <Label>
                    Quiz Name
                </Label>

                <TextInput
                    value={quiz.name}
                    onChange={(data) => setQuizParam('name', data)}
                    placeholder='Quiz Name'
                    className='w-1/3'
                />
            </div>


            <div className='pt-4'>
                <Label>
                    Quiz Type
                </Label>

                <TextInput
                    value={quiz.name}
                    onChange={(data) => setQuizParam('name', data)}
                    placeholder='Quiz Type'
                    className='w-1/3'
                />
            </div>
        </form>
    );
}

export default QuizForm;

