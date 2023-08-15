"use client";

import React from "react";
import {QuizType} from "@/modules/Quiz/types/QuizType";
import {StepsForm, Step, PrevButton, NextButton, StepsStatus} from "@/components/compound/StepsForm";
import Block from "@/components/Block";

interface Props {
    quizTypes: QuizType[]
}
const QuizAlternativeCreate: React.FC<Props> = ({ quizTypes }) => {
    return (
        <StepsForm>
            <StepsStatus />

            <div className="mt-16">
                <Step stepKey='1'><Block>Step 1</Block></Step>
                <Step stepKey='2'><Block>Step 2</Block></Step>
            </div>

            <div className="flex justify-between mt-12">
                <PrevButton disabled={false} onClick={(step) => {}}>Prev</PrevButton>
                <NextButton disabled={false} onClick={(step) => {}}>Next </NextButton>
            </div>
        </StepsForm>
    );
}

export default QuizAlternativeCreate;