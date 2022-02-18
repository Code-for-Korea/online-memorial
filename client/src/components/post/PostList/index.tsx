import React, {useCallback, useEffect, useState} from "react";
import FlexColumn from "../../common/FlexColumn";
import PostPaper from "../PostPaper";
import PostText from "../PostText";
import styles from "./style.module.css";
import PostService from "../../../services/post.service";

export type PostData = {
    id: number;
    content: string;
}

export type PostDataList = PostData[];

export type PostListProps = {
    pageNum: number;
}

const PostList:React.FC<PostListProps> = ({ pageNum }) => {

    const [postList, setPostList]= useState<PostDataList>([]);

    const initializePostList = useCallback(async () => {
        const currentDate = new Date(Date.now());
        const data = await PostService.getPost(currentDate.getFullYear(), pageNum, 10);
        if (data !== null) {
            setPostList(data);
        }
    }, [pageNum]);

    useEffect(() => {
        initializePostList();
    }, []);

    return (
        <FlexColumn style={styles["post--list__wrapper"]}>
            {
                postList.map((postData) => {
                    return (
                        <PostPaper key={`postData-${postData.id}`}>
                            <PostText content={postData.content}/>
                        </PostPaper>
                    )
                })
            }
        </FlexColumn>
    )
};

export default PostList;