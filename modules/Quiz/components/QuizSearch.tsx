import TextInput from "@/components/input/TextInput";
import React from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

interface Props {

}

const QuizSearch: React.FC<Props> = () => {
    return (
        <div className='relative'>
            <div className="absolute right-4 inset-y-0 flex items-center pl-2">
                <BsSearch />
            </div>

            <TextInput
                placeholder="Find Quiz"
            />
        </div>
    )
}

export default QuizSearch;