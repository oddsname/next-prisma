import React from "react";

interface Props {
    children: string
}

const ErrorMessage: React.FC<Props> = ({ children}) => {
    return (
        <div className="pl-4 text-red-700">
            {children}
        </div>
    );
}

export default ErrorMessage;