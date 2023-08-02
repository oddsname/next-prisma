import React from "react";
import Block from "@/components/Block";
import {QuizTypeOption} from "@/modules/Quiz/interfaces/QuizTypeOption";

interface Props {
    types: QuizTypeOption[],
    onClick: (quizType: QuizTypeOption) => void|any,
}

const QuizTypeSelector: React.FC<Props> = ({ types, onClick}) => {
    const getTypeClass = (quizType: QuizTypeOption, index: number) => {
        let disabledClass = quizType.disabled ? "bg-disabled" : 'hover:bg-amber-200';

        if (index === 0) {
            return "rounded-t-3xl " + disabledClass
        }

        if (index === types.length - 1) {
            return "rounded-b-3xl border-t-2 " + disabledClass
        }

        return "border-t-2 " + disabledClass
    }

    return <Block
        className="cursor-pointer rounded-3xl mx-auto text-center text-4xl font-bold mt-12"
        width="50%"
        rounded="3xl"
    >
        {types.map((quizType, index) =>
            <div
                className={getTypeClass(quizType, index) + " border-black py-12"}
                key={quizType.key}
                onClick={() => onClick(quizType)}
            >
                {quizType.text}
            </div>
        )}
    </Block>
}

export default QuizTypeSelector;
