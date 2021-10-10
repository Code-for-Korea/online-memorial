import React from "react";
import styles from "./style.module.css";

type AnimatedImageProps = {
    src: string;
    styleWithAnimation: string;
}

const AnimatedImage:React.FC<AnimatedImageProps> = ({ src, styleWithAnimation }) => {

    const alt = src.split("/")[0].split(".")[0];

    return (
        <img src={src} className={`${styles["animated-image"]} ${styleWithAnimation}`} alt={alt}/>
    )
};

export default AnimatedImage;