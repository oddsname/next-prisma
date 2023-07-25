import TextInput from "@/components/input/TextInput";
import React from "react";

interface Props {

}

const QuizSearch: React.FC<Props> = () => {
    return (
        <div className='relative'>
            <div className="absolute right-4 inset-y-0 flex items-center pl-2">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>

            <TextInput
                placeholder="Find Quiz"
            />
        </div>
    )
}

export default QuizSearch;