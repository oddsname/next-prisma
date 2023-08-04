"use client";

import React from "react";

interface Props {
    value?: string
    className?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any|void
}
const TextareaInput: React.FC<Props> = (
    {placeholder = '', className = '', value = '', onChange = () => {} }
) => {
    return (
        <div className={className}>
            <textarea
                className={"shadow appearance-none border rounded-lg w-full py-3 px-6 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={6}
            />
        </div>
    )
}

export default TextareaInput;