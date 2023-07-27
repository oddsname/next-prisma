import React from "react";

interface Props {
    children: React.ReactNode,
    className?: string,
}

const Block: React.FC<Props> = ({ children, className }) => {
    return (
        <div className="app-block">
            <div className={className + " w-full h-full"}>
                { children }
            </div>

        </div>
    );
}

export default Block;