import {useState} from "react";
import React from "react";
import {useValidation, ValidationRule} from "@/hooks/useValidation";

type Elements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const useInput = <T extends Elements>(defaultValue: string = '', validationRules: ValidationRule[] = []) => {
    const [value, setValue] = useState<undefined|string>(defaultValue);
    const { error, validate } = useValidation(validationRules);

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