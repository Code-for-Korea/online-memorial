import React from "react";
import Container from "../../common/Container";
import styles from "./style.module.css"

type CarouselCardProps = {
    style?: string;
    children: React.ReactNode;
}

const CarouselCard:React.FC<CarouselCardProps> = ({ style, children }) => {

    return (
        <Container style={`${styles["carousel--card__wrapper"]} ${style ? style : ""}`}>
            {
                children
            }
        </Container>
    )
};

export default CarouselCard;