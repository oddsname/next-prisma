"use client";

import React from "react";

interface Props {
    value?: string
    className?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
}
 const TextInput: React.FC<Props> = (
     { placeholder = '', className = '', value = '', onChange = () => {} }
 ) => {
    return (
        <div className={className}>
            <input
                type="text"
                className={"shadow appearance-none border rounded-full w-full py-3 px-6 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput;