"use client";

import React, {useContext, createContext, useMemo, useState} from "react";
import StatusBar from "@/components/StatusBar";
import Button from "@/components/Button";

interface StepsFormContextData {
    activeStep: string,
    steps: string[],
    setActiveStep?: React.Dispatch<React.SetStateAction<string>>
    setSteps?: React.Dispatch<React.SetStateAction<string[]>>
}

const StepsFormContext = createContext<StepsFormContextData>({
    activeStep: '',
    steps: [],
})

const useStepsFormContext = () => {
    const context = useContext(StepsFormContext);

    if (!context) {
        throw new Error("All StepsForm components must be used as a children of StepForm component")
    }

    return context;
}

interface NextButtonProps {
    disabled: boolean,
    onClick: (step: string|number, steps: string[]|number[]) => void | any,
    children: string
}

const NextButton: React.FC<NextButtonProps> = ({disabled, onClick, children = "Next"}) => {
    const {steps, activeStep, setActiveStep} = useStepsFormContext();

    const onNextClick = () => {
        onClick(activeStep, steps);

        const index = steps.findIndex((step) => step === activeStep);

        if (index !== -1 && index !== steps.length - 1 && setActiveStep) {
            setActiveStep(steps[index + 1])
        }
    }

    return (
        <Button
            disabled={disabled}
            type="primary"
            onClick={onNextClick}
        >
            {children}
        </Button>
    )
}

interface PrevButtonProps {
    disabled: boolean,
    onClick: (step: string|number, steps: string[]|number[]) => void | any,
    children: string,
}

const PrevButton: React.FC<PrevButtonProps> = ({disabled, onClick, children = "Previous"}) => {
    const {steps, activeStep, setActiveStep} = useStepsFormContext();

    const onPrevClick = () => {
        onClick(activeStep, steps);

        const index = steps.findIndex((step) => step === activeStep);

        if (index && setActiveStep) {
            setActiveStep(steps[index - 1])
        }
    }

    return (
        <Button
            disabled={disabled}
            type="danger"
            onClick={onPrevClick}
        >
            {children}
        </Button>
    );
}

interface StepsStatusProps {

}

const StepsStatus: React.FC<StepsStatusProps> = () => {
    const {activeStep, steps} = useStepsFormContext()

    return (
        <StatusBar keys={steps} selected={activeStep}/>
    );
}

interface StepProps {
    children: React.ReactNode,
    stepKey: string
}

const Step: React.FC<StepProps> = ({stepKey, children}) => {
    const {activeStep} = useStepsFormContext()

    return (
        <div className={activeStep !== stepKey ? 'hidden' : ""}>
            {children}
        </div>
    );
}

// Step.displayName = 'Step';

interface Props {
    children: React.ReactNode,
}

const StepsForm: React.FC<Props> = ({children}) => {
    const stepKeys = useMemo((): string[] => {
        return React.Children.toArray(children)
            //@ts-ignore
            .filter((child) => React.isValidElement(child) && child.type.name === 'Step')
            .map((child) => React.isValidElement(child) && child.props.stepKey);
    }, [])

    const [steps, setSteps] = useState<string[]>(stepKeys);
    const [activeStep, setActiveStep] = useState<string>(steps[0] || '');

    return (
        <StepsFormContext.Provider value={{steps, activeStep, setSteps, setActiveStep}}>
            <div>
                <div className='h-full w-full'>
                    {children}
                </div>
            </div>
        </StepsFormContext.Provider>
    )
}

export {
    StepsForm,
    NextButton,
    PrevButton,
    Step,
    StepsStatus
}
