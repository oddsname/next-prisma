import React from "react";

interface Props {
    children?: React.ReactNode
}

const Label: React.FC<Props> = ({ children='' }) => {

    return (
        <div className="pl-2 pb-2 app-text_black font-extrabold">
            {children}
        </div>
    )
}

export default Label;