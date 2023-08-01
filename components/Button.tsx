import React from "react";

type ButtonType = 'primary' | 'danger'
interface Props {
    children?: React.ReactNode,
    type: ButtonType,
    onClick?: () => void|any,
}

const Button: React.FC<Props>  = ({ onClick = () => {}, type, children = '' }) => {

    const getBtnColor = () => {
        if(type === "danger") {
            return "bg-network-white hover:bg-red-400"
        }

        return "bg-network-white hover:bg-yellow-300"
    }

    return (
        <button
            onClick={onClick}
            className={getBtnColor() + " font-bold py-2 px-8 rounded-full text-2xl"}
        >
            {children}
        </button>
    );
}

export default Button;
