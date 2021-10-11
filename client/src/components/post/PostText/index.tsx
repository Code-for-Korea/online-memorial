import React from "react";
import TextChunk from "../../common/TextChunk";
import styles from "./style.module.css";

type PostTextProps = {
    content: string;
    charLimit?: number | null;
}

const PostText:React.FC<PostTextProps> = ({ content, charLimit = null }) => {

    return (
        <TextChunk
            style={styles["post--text"]}
            content={content} 
            charLimit={charLimit} 
        />
    )
};

export default PostText;