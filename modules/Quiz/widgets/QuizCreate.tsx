"use client"

import React, {useEffect, useLayoutEffect, useState} from "react";
import StatusBar from "@/components/StatusBar";
import Button from "@/components/Button";
import QuizCreateSteps from "@/modules/Quiz/components/QuizCreateSteps";
import {QuizType} from "@/modules/Quiz/types/QuizType";
import {useCreateQuizStore} from "@/modules/Quiz/store/CreateQuizStore";

interface Props {
    quizTypes: QuizType[]
}

const QuizCreate: React.FC<Props> = ({quizTypes}) => {
    const {setQuizTypes, setQuizType, quizType} = useCreateQuizStore();
    const [step, setStep] = useState(1);
    const enabledTypes = ['simple'];
    const stepsAmount = 3;

    useLayoutEffect(() => {
        setQuizTypes(quizTypes, enabledTypes);

        if (!quizType) {
            selectFirstQuizType()
        }
    }, [])

    const selectFirstQuizType = () => {
        const type = quizTypes.find((quizType) => enabledTypes.includes(quizType.type));

        if (type) {
            setQuizType(type);
        } else {
            throw new Error("No active QuizTypes found");
        }
    }

    const onNextPageClick = () => {
        setStep(step + 1);
    }

    const onPrevPageClick = () => {
        setStep(step - 1);
    }

    const isFirstStep = () => step === 1;

    const isLastStep = () => step === 3;

    return (
        <div>
            <div className='h-full w-full'>
                <StatusBar amount={stepsAmount} selected={step}/>


                <div className="mt-16">
                    <QuizCreateSteps
                        step={step}
                        prevPage={onPrevPageClick}
                        nextPage={onNextPageClick}
                    />
                </div>
            </div>

            <div className="absolute bottom-16 w-4/5">
                <div className="flex justify-between">
                    <div>
                        {!isFirstStep() && <Button type="danger" onClick={onPrevPageClick}>Previous</Button>}
                    </div>

                    <div>
                        <Button
                            type="primary"
                            onClick={onNextPageClick}
                        >
                            {isLastStep() ? 'Finish' : 'Next Page'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizCreate