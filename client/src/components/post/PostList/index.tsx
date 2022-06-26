import React from "react";
import FlexColumn from "../../common/FlexColumn";
import PostPaper from "../PostPaper";
import PostText from "../PostText";
import styles from "./style.module.css";

export type PostData = {
    id: number;
    body: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export type PostDataList = PostData[];

export type PostListProps = {
    postList: PostDataList;
}

const PostList: React.FC<PostListProps> = ({ postList }) => {


    return (
        <FlexColumn style={styles["post--list__wrapper"]}>
            {
                postList.map((postData) => {
                    return (
                        <PostPaper key={`postData-${postData.id}`}>
                            <PostText content={postData.body} />
                            <PostText content={`-${postData.name[0]}${Array(postData.name.length - 1).fill("*").join("")}`} />
                        </PostPaper>
                    )
                })
            }
        </FlexColumn>
    )
};

export default PostList;
