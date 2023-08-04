import React, {useEffect} from "react";
import TextHeader from "@/components/TextHeader";
import QuizTypeSelector from "@/modules/Quiz/components/QuizTypeSelector";
import {QuizTypeOption} from "@/modules/Quiz/types/QuizTypeOption";
import {useCreateQuizStore} from "@/modules/Quiz/store/CreateQuizStore";

interface Props {

}

const QuizTypeStep: React.FC<Props> = () => {
    const {quizTypes, quizType, setQuizType} = useCreateQuizStore();

    const onSelectQuizType = (quizType: QuizTypeOption) => {
        setQuizType(quizType);
    }

    const renderStep = () => {
        if(!quizType || !quizTypes.length) {
            return <div className='text-amber-400 font-bold text-center text-4xl'>
                Quiz data not found
            </div>
        }

        return (
            <QuizTypeSelector
                type={quizType}
                types={quizTypes}
                onSelect={onSelectQuizType}
            />
        )
    }

    return (
        <div>
            <TextHeader>Select Quiz Type</TextHeader>

            { renderStep() }
        </div>
    )
}

export default QuizTypeStep;