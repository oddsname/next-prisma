import React from "react";

interface Props {
    children: React.ReactNode,
    className?: string,
    width?: string,
    rounded?: '3xl' | "full"
}

const Block: React.FC<Props> = ({rounded = "3xl", children, className, width = '100%',}) => {
    return (
        <div className={`app-block ${"rounded-" + rounded} ${className}`} style={{ width, minHeight: '25px' }}>
            {children}
        </div>
    );
}

export default Block;