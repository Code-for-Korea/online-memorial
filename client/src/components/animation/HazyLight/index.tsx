import React from "react";
import styles from "./style.module.css";

type HazyLightProps = {
    top?: number;
    left?: number;
    scale?: number;
    unit?: string;
    styleWithPosition?: string;
}

const HazyLight: React.FC<HazyLightProps> = ({styleWithPosition, top = 0, left = 0, scale = 1, unit = "%"}) => {

    return (
        <div
            className={`${styles["hazy-light"]} ${styleWithPosition ?? ""}`}
            style={top || left ? {
                top: `${top}${unit}`,
                left: `${left}${unit}`,
                transform: `translateX(-50%) translateY(-50%) scale(${scale}, ${scale})`
            } : {}}
        />
    )
};

export default HazyLight;