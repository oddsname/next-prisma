import React from "react";

const QuizTypeStep = React.lazy(() => import("@/modules/Quiz/components/steps/QuizTypeStep"))
const QuizMetaStep = React.lazy(() => import("@/modules/Quiz/components/steps/QuizMetaStep"))

interface Props {
    step: number,
    nextPage: () => void,
    prevPage: () => void,
}
const QuizCreateSteps: React.FC<Props> = ({ step }) => {
    return (
        <div>
            { step === 1 && <QuizTypeStep />}
            { step === 2 && <QuizMetaStep />}
        </div>
    )
}

export default QuizCreateSteps;