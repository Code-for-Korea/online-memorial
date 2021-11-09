import React, { useCallback, useState } from "react";
import FlexColumn from "../../../components/common/FlexColumn";
import TextChunk from "../../../components/common/TextChunk";
import Pagination from "../../../components/pagination/Pagination";
import PostList from "../../../components/post/PostList";
import styles from "./style.module.css";

type MemorialPostsProps = {}

const MemorialPosts:React.FC<MemorialPostsProps> = () => {

    const [postPageNum, setPostPageNum] = useState<number>(1);
    const updatePostPageNum = useCallback((newPageNum) => {
        setPostPageNum(newPageNum);
    }, []);

    const getLastPostPageNum = useCallback(() => {
        return 14;
    }, [])

    return (
        <>
            <FlexColumn style={styles["pagination"]}>
                <TextChunk content={`230명이\n추모하셨습니다`} style={styles["pagination--text"]}/>
                <Pagination onPageChange={updatePostPageNum} lastPage={getLastPostPageNum()} initialPageNum={postPageNum}/>
            </FlexColumn>
            <PostList pageNum={postPageNum} />
        </>
    )
};

export default MemorialPosts;