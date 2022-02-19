import React from "react";
import FlexRow from "../common/FlexRow";
import AnimatedImage from "../animation/AnimatedImage";
import FlexColumn from "../common/FlexColumn";
import TextChunk from "../common/TextChunk";
import styles from "./style.module.css";

export type NewsCardProps = {
    title: string;
    description: string;
    thumbnail?: string;
    url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({title, description, thumbnail, url}) => {

    return (
        <a className={styles["news-card-link"]} href={url} rel="noreferrer" target="_blank">
            <FlexRow style={styles["news-card"]}>
                <FlexRow style={styles["news-card--thumbnail__wrapper"]}>
                    <AnimatedImage
                        src={thumbnail ?? `${process.env.PUBLIC_URL}/assets/image/news-thumbnail.svg`}
                        styleWithAnimation={`${styles["news-card--thumbnail__image"]} ${thumbnail ? styles["news-card--thumbnail__full-image"] : ""}`}
                    />
                </FlexRow>
                <FlexColumn style={styles["news-card--content__wrapper"]}>
                    <TextChunk content={title} style={styles["news-card--title"]}/>
                    <TextChunk content={description} style={styles["news-card--description"]}/>
                </FlexColumn>
            </FlexRow>
        </a>
    )
};

export default NewsCard;