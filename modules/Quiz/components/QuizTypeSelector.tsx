import React from "react";
import Block from "@/components/Block";
import {QuizTypeOption} from "@/modules/Quiz/types/QuizTypeOption";

interface Props {
    types: QuizTypeOption[],
    type: QuizTypeOption,
    onSelect: (quizType: QuizTypeOption) => void|any,
}

const QuizTypeSelector: React.FC<Props> = ({type, types, onSelect}) => {
    const getTypeClass = (quizType: QuizTypeOption, index: number) => {
        let disabledClass = quizType.disabled ? "bg-disabled" : '';
        let selectedClass = quizType.id === type.id ? 'border-blue-400' : 'border-transparent';

        let additionalClasses = disabledClass  + ' ' + selectedClass;

        if (index === 0) {
            return "rounded-t-3xl " + additionalClasses
        }

        if (index === types.length - 1) {
            return "rounded-b-3xl border-t-2 " + additionalClasses
        }

        return "border-t-2 " + additionalClasses
    }


    return <div className="rounded-3xl w-full text-center text-4xl font-bold mt-12">
        {types.map((quizType, index) =>
            <div
                className={getTypeClass(quizType, index) + " my-4 cursor-pointer border-2 border-black bg-amber-200 mx-auto rounded-3xl py-4 px-4 w-1/3"}
                key={quizType.id}
                onClick={() => onSelect(quizType)}
            >
                {quizType.type}
            </div>
        )}
    </div>
}

export default QuizTypeSelector;
