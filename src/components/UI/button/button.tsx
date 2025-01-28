import React from "react";
import stl from "./button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type, disabled }) => {
    return(
        <button
            className={`${className} ${stl.button}`}
            onClick={onClick}
            type={type}
            disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;