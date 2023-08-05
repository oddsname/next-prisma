import React from "react";

type ButtonType = 'primary' | 'danger' | 'blue';
interface Props {
    children?: React.ReactNode,
    type: ButtonType,
    onClick?: () => void|any,
    disabled?: boolean,
}

const Button: React.FC<Props>  = ({ onClick = () => {}, type, children = '', disabled = false }) => {
    const getBtnColor = () => {
        if(disabled) {
            return "disabled bg-disabled"
        }

        if(type === "danger") {
            return "bg-network-white hover:bg-red-400"
        }

        if(type === 'blue') {
            return "bg-blue-400 hover:bg-white border-black"
        }

        return "bg-network-white hover:bg-yellow-300"
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={getBtnColor() + " border-2 border-transparent font-bold py-2 px-8 rounded-full text-2xl"}
        >
            {children}
        </button>
    );
}

export default Button;
