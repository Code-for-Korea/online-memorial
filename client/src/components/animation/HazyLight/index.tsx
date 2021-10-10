import React from "react";
import styles from "./style.module.css";

type HazyLightProps = {
    top?: number;
    left?: number;
    scale?: number;
    styleWithPosition?: string;
}

const HazyLight:React.FC<HazyLightProps> = ({ styleWithPosition, top = 0, left = 0, scale = 1 }) => {

    return (
        <div 
            className={`${styles["hazy-light"]} ${styleWithPosition??""}`} 
            style={{
                top: `${top}%`,
                left: `${left}%`,
                transform: `translateX(-50%) translateY(-50%) scale(${scale}, ${scale})`
            }}
        ></div>
    )
};

export default HazyLight;