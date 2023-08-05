import {useState} from "react";
import React from "react";
import { ValidationRule, required} from "@/utils/validation/rules";


type Elements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const useInput = <T extends Elements>(defaultValue: string = '', validationRules: ValidationRule[] = []) => {
    const [value, setValue] = useState<undefined|string>(defaultValue);
    const [error, setError] = useState("");

    const validate = (value: unknown) => {
        setError("");
        let message = "";

        for(let rule of validationRules) {
            const validationResult = rule(value);

            if(validationResult !== true) {
                message = validationResult
                break;
            }
        }

        if(message) {
            setError(message);
        }
    }
    const onChange = (e: React.ChangeEvent<T>) => {
        validate(e.target.value);
        setValue(e.target.value)

        return e;
    }

    return {
        value,
        onChange,
        error,
    }
}