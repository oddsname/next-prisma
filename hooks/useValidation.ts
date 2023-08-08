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

export const isImage = (message = 'File must be an image'): ValidationRule => {
    const imageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    return (value: unknown): true|string => {
        if(value instanceof File &&imageTypes.includes(value.type)) {
            return true;
        }

        return message;
    }
}

export const fileSize = (fileSize: number, message: string = "File size must be lower than " + fileSize + " bytes"): ValidationRule => {
    return (value: unknown): true|string => {
        if(value instanceof File && value.size <= fileSize) {
            return true;
        }

        return message;
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
            return false;
        }

        return true;
    }

    return {
        validate,
        error,
    }
}