import React from "react";
import FlexRow from "../../common/FlexRow";
import styles from "./style.module.css";

type PostPaperProps = {
    children: React.ReactNode;
}

const PostPaper:React.FC<PostPaperProps> = ({ children }) => {

    return (
        <FlexRow style={styles["post--paper__wrapper"]}>
            <img 
                className={styles["post--paper__sticker"]}
                src={`${process.env.PUBLIC_URL}/assets/image/sticker.svg`} 
                alt="post-sticker"
            />
            <div className={styles["post--paper__background"]}>
                {
                    children
                }
            </div>
        </FlexRow>
    )
};

export default PostPaper;