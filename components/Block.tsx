import React from "react";

interface Props {
    children: React.ReactNode
}

const Block: React.FC<Props> = ({ children }) => {
    return (
        <div className="app-block">
            { children }
        </div>
    );
}

export default Block;