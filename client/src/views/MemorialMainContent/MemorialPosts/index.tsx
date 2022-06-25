import React, { useCallback, useEffect, useState } from "react";
import FlexColumn from "../../../components/common/FlexColumn";
import TextChunk from "../../../components/common/TextChunk";
import Pagination from "../../../components/pagination/Pagination";
import PostList, { PostDataList } from "../../../components/post/PostList";
import PostService from "../../../services/post.service";
import styles from "./style.module.css";

type MemorialPostsProps = {};

const MemorialPosts: React.FC<MemorialPostsProps> = () => {
    const [postPageNum, setPostPageNum] = useState<number>(1);
    const [totalPageNum, setTotalPageNum] = useState<number>(1);
    const [totalPostNum, setTotalPostNum] = useState<number>(0);
    const [postList, setPostList] = useState<PostDataList>([]);

    const initializePostList = useCallback(async () => {
        const data = await PostService.getPost(postPageNum, 10);
        if (data !== null) {
            setTotalPageNum(data["meta"]["total_pages"]);
            setTotalPostNum(data["meta"]["total_count"]);
            setPostList(data["posts"].map((post: { [key: string]: string }) => ({
                id: post["id"],
                body: post["body"],
                name: post["name"],
                createdAt: Date.parse(post["created_at"]),
                updatedAt: Date.parse(post["updated_at"]),
            })));
        }
    }, [postPageNum]);

    const updatePostPageNum = useCallback((newPageNum: number) => {
        setPostPageNum(newPageNum);
    }, []);

    useEffect(() => {
        initializePostList();
    }, [postPageNum]);

    return (
        <>
            <FlexColumn style={styles["pagination"]}>
                <TextChunk
                    content={`${totalPostNum}명이\n추모하셨습니다`}
                    style={styles["pagination--text"]}
                />
                <Pagination
                    onPageChange={updatePostPageNum}
                    lastPage={totalPageNum}
                    initialPageNum={postPageNum}
                />
            </FlexColumn>
            <PostList postList={postList} />
        </>
    );
};

export default MemorialPosts;
