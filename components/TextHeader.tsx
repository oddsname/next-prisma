import React from "react"

interface Props {
    children: React.ReactNode,
    className?: string
}

const TextHeader: React.FC<Props> = ({ children, className }) => {
    return (
        <>
            <h1 className={className + " font-extrabold text-6xl text-center pb-6"}>{children}</h1>
        </>
    )
}

export default TextHeader;