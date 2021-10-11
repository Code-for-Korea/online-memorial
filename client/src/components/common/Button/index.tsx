import React from "react";
import styles from "./style.module.css";

type ButtonProps = {
    text: string;
    onClick: (evt:React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
    children?: React.ReactNode;
}

const Button:React.FC<ButtonProps> = ({ text, onClick, style, children }) => {

    return (
        <button onClick={onClick} className={`${styles.button} ${style??""}`}>
            {
                children ? children : text
            }
        </button>
    )
};

export default Button;