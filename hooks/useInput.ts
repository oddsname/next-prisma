import {useState} from "react";
import React from "react";
export const useInput = (defaultValue: string|null) => {
    const [value, setValue] = useState(defaultValue);

    return {
        value,
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
            setValue(e.target.value)
        }
    }
}