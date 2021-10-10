import React from "react";
import styles from "./style.module.css";

type TextChunkProps = {
    content: string;
    isParagraph?: boolean;
    charLimit?: number | null;
    style?: string;
}

const TextChunk:React.FC<TextChunkProps> = ({ isParagraph = false, content, charLimit = null, style }) => {

    const textContent = charLimit ? `${content.slice(0, charLimit)}...` : content;

    if (isParagraph) {
        return (
            <p className={`${styles.text} ${style??""}`}>
                {
                    textContent
                }
            </p>
        )
    }

    return (
        <span className={`${styles.text} ${style??""}`}>
            {
                textContent
            }
        </span>
    )
};

export default TextChunk;