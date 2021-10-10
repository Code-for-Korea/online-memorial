import React from "react";
import styles from "./style.module.css";

type FlexColumnProps = {
    style?: string;
    children: React.ReactNode;
}

const FlexColumn:React.FC<FlexColumnProps> = ({ style, children }) => {

    return (
        <div className={`${styles.column} ${style??""}`}>
            {
                children
            }
        </div>
    )
};

export default FlexColumn;