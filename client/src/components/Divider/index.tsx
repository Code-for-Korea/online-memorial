import React from "react";
import FlexColumn from "../common/FlexColumn";
import FlexRow from "../common/FlexRow";
import TextChunk from "../common/TextChunk";
import AnimatedImage from "../animation/AnimatedImage";
import styles from "./style.module.css";

export type DividerProps = {
    title?: string;
}

const Divider: React.FC<DividerProps> = ({title}) => {

    return (
        <FlexColumn style={styles["divider"]}>
            {
                title && (
                    <TextChunk content={title} style={styles["divider--title"]} />
                )
            }
            <FlexRow style={styles["divider--line__wrapper"]}>
                <hr className={styles["divider--line"]}/>
                <AnimatedImage src={`${process.env.PUBLIC_URL}/assets/image/flower.svg`} styleWithAnimation={styles["divider--flower"]}/>
                <hr className={styles["divider--line"]}/>
            </FlexRow>
        </FlexColumn>
    )
};

export default Divider;