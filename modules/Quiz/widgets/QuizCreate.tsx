"use client"

import React, {useState} from "react";
import QuizForm from "@/modules/Quiz/components/QuizForm";
import {QuizParams} from "@/modules/Quiz/interfaces/QuizParams";

const QuizCreate: React.FC = () => {
    const [quiz, setQuiz] = useState({} as QuizParams)

    const onSubmit = (e: React.FormEvent) => {

    }

    return (
        <QuizForm
            onSubmit={onSubmit}
            setQuiz={setQuiz}
            quiz={quiz}
        />
    );
}

export default QuizCreate