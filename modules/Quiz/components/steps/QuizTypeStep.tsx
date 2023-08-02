import React from "react";
import TextHeader from "@/components/TextHeader";
import QuizTypeSelector from "@/modules/Quiz/components/QuizTypeSelector";
import {QuizTypeOption} from "@/modules/Quiz/interfaces/QuizTypeOption";

interface Props {

}

const QuizTypeStep: React.FC<Props> = () => {
    const quizTypes: QuizTypeOption[] = [
        {key: "simple", text: "Simple Quiz", disabled: false},
        {key: "1", text: '...', disabled: true},
        {key: "2", text: '...', disabled: true}
    ];

    return (
        <div className="border-r-10 mt-16">
            <TextHeader>Select Quiz Type</TextHeader>

            <div>
                <QuizTypeSelector types={quizTypes} onClick={() => {}}/>
            </div>
        </div>
    )
}

export default QuizTypeStep;