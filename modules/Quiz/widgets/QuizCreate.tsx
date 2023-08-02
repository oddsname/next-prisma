"use client"

import React, {useState} from "react";
import StatusBar from "@/components/StatusBar";
import QuizTypeStep from "@/modules/Quiz/components/steps/QuizTypeStep";

const QuizCreate: React.FC = () => {


    return (
        <div>

            {/*<Block className=" px-4 pb-8 pt-9">*/}
            <StatusBar amount={3} selected={1}/>
            {/*</Block>*/}

            <QuizTypeStep />

            {/*<div className="mt-8 flex justify-between">*/}
            {/*    <Button type="danger">Previous</Button>*/}
            {/*    <Button type="primary">Next</Button>*/}
            {/*</div>*/}

        </div>
    );
}

export default QuizCreate