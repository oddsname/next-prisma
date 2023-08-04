import {useState} from "react";
import React from "react";


type Elements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const useInput = <T extends Elements>(defaultValue: string = '') => {
    const [value, setValue] = useState<undefined|string>(defaultValue);

    return {
        value,
        onChange: (e: React.ChangeEvent<T>) => {
            setValue(e.target.value)

            return e;
        }
    }
}