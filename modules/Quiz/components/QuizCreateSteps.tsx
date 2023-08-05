import React from "react";

import QuizMetaStep from "@/modules/Quiz/components/steps/QuizMetaStep";
import QuizTypeStep from "@/modules/Quiz/components/steps/QuizTypeStep";
interface Props {
    step: number,
    setNextButtonDisabled: (value: boolean) => void,
    setPrevButtonDisabled: (value: boolean) => void,
}
const QuizCreateSteps: React.FC<Props> = ({ step, setNextButtonDisabled }) => {
    return (
        <div>
            { step === 1 && <QuizTypeStep  />}
            { step === 2 && <QuizMetaStep setNextButtonDisabled={setNextButtonDisabled} />}
        </div>
    )
}

export default QuizCreateSteps;