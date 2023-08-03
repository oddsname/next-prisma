import React from "react";
import QuizTypeStep from "@/modules/Quiz/components/steps/QuizTypeStep";

interface Props {
    step: number,
    nextPage: () => void,
    prevPage: () => void,
}
const QuizCreateSteps: React.FC<Props> = ({ step }) => {
    return (
        <div>
            { step === 1 && <QuizTypeStep />}
        </div>
    )
}

export default QuizCreateSteps;