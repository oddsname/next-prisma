import {useState} from "react";

export type ValidationRule = (value: unknown) => true|string

export const required = (message = 'Field is required'): ValidationRule => {
    return (value: unknown): true|string => {
        if(!(value !== '' && value !== null && value !== undefined)) {
            return message
        }

        return true;
    }
}

export const maxLength = (length: number, message: string = "Max length for this field is " + length): ValidationRule => {
    return (value: unknown): true|string => {
        if(value && value.toString().length > length) {
            return message;
        }

        return true;
    }
}

export const useValidation = (validationRules: ValidationRule[]) => {
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

    return {
        validate,
        error,
    }
}