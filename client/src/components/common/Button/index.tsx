import React from "react";
import styles from "./style.module.css";

export type ButtonProps = {
    text: string;
    onClick?: (evt:React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button:React.FC<ButtonProps> = ({ text, onClick, style, children, type }) => {

    return (
        <button type={type ? type : "button"} onClick={onClick ? onClick : () => null} className={`${styles.button} ${style??""}`}>
            {
                children ? children : text
            }
        </button>
    )
};

export default Button;