import React from "react";
import styles from "./style.module.css";

type ContainerProps = {
    style?: string;
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({ style, children }) => {

    return (
        <div className={`${styles.container} ${style??""}`}>
            {
                children
            }
        </div>
    )
};

export default Container;