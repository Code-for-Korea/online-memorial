import React from "react";
import FlexRow from "../../components/common/FlexRow";
import styles from "./style.module.css";

type MemorialPostsProps = {
    
}

const MemorialPosts:React.FC<MemorialPostsProps> = ({  }) => {

    return (
        <FlexRow style={styles["memorial-posts--wrapper"]}>
            memorial posts
        </FlexRow>
    )
};

export default MemorialPosts;