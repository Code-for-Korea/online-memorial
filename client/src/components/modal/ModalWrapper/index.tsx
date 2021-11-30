import React from "react";
import styles from "./style.module.css";

type ModalWrapperProps = {
    onClose: () => void;
    children: React.ReactNode;
}

const ModalWrapper:React.FC<ModalWrapperProps> = ({ children, onClose }) => {

    return (
        <div className={styles["modal--container__wrapper"]} onClick={onClose}>
            <div className={styles["modal--container__content"]}>
                {
                    children
                }
            </div>
        </div>
    )
};

export default ModalWrapper;