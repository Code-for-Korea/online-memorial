import React from "react";
import styles from "./style.module.css";

type ButtonProps = {
    text: string;
    onClick: (evt:React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
}

const Button:React.FC<ButtonProps> = ({ text, onClick, style }) => {

    return (
        <button onClick={onClick} className={`${styles.button} ${style??""}`}>
            {
                text
            }
        </button>
    )
};

export default Button;