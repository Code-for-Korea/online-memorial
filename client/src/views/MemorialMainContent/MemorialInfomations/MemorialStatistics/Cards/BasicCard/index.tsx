import React from "react";
import CarouselCard from "../../../../../../components/carousel/CarouselCard";
import FlexColumn from "../../../../../../components/common/FlexColumn";
import FlexRow from "../../../../../../components/common/FlexRow";
import TextChunk from "../../../../../../components/common/TextChunk";
import styles from "./style.module.css";

type BasicCardProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const BasicCard:React.FC<BasicCardProps> = ({ title, subtitle, children }) => {

    return (
        <CarouselCard style={styles["memorial-statistic-card"]}>
            <FlexColumn style={styles["memorial-statistic-card--content"]}>
                <FlexRow style={styles["memorial-statistic-card--header"]}>
                    <img className={styles["memorial-statistic-card--logo"]} src={process.env.PUBLIC_URL + "/assets/image/flower.svg"} alt={title} />
                    <FlexColumn>
                        <TextChunk style={styles["memorial-statistic-card--subtitle"]} content={subtitle} isParagraph={true}/>
                        <TextChunk style={styles["memorial-statistic-card--title"]} content={title} isParagraph={true}/>
                    </FlexColumn>
                </FlexRow>
                {
                    children
                }
            </FlexColumn>
        </CarouselCard>
    )
};

export default BasicCard;