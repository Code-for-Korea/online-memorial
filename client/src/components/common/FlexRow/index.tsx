import React from "react";
import styles from "./style.module.css";

type FlexRowProps = {
    style?: string;
    children: React.ReactNode;
}

const FlexRow:React.FC<FlexRowProps> = ({ style, children }) => {

    return (
        <div className={`${styles.row} ${style??""}`}>
            {
                children
            }
        </div>
    )
};

export default FlexRow;