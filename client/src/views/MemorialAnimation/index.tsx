import React, { useCallback, useEffect, useState } from "react";
import MemorialTable from "../../components/animation/MemorialTable";
import Button from "../../components/common/Button";
import FlexColumn from "../../components/common/FlexColumn";
import TextChunk from "../../components/common/TextChunk";
import { LOCAL_STORAGE_KEY } from "../../config/constant";
import DataService from "../../services/data.service";
import PostService from "../../services/post.service";
import AddPostModal from "./AddPostModal";
import styles from "./style.module.css";

export type MemorialAnimationProps = {
    onPostSubmit: () => void;
    year?: number;
}

const MemorialAnimation: React.FC<MemorialAnimationProps> = ({ onPostSubmit, year = new Date(Date.now()).getFullYear() }) => {

    const [showAddPostModal, setShowAddPostModal] = useState(false);
    const [deathCount, setDeathCount] = useState<number>(getCachedDeathCount());
    const memorialTextContent = `${year}년, 산업 재해로 인해\n사망한 분들의 숫자입니다`;
    const addPostButtonText = "추모글 남기기";


    const initializeDeathCount = async () => {
        const data = await DataService.getTotalCount("death", new Date(Date.now()).getFullYear());
        if (data !== null) {
            setDeathCount(data);
            setCachedDeathCount(data);
        }
    }


    const onClickAddPost = (_: React.MouseEvent<HTMLButtonElement>) => {
        setShowAddPostModal(true);
    }

    const onCloseModal = useCallback(() => {
        setShowAddPostModal(false);
    }, [])

    const onSubmitPost = useCallback(async (name: string, text: string) => {
        const result = await PostService.createPost({
            name,
            body: text,
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, result["id"].toString());
        onPostSubmit();
    }, [])

    useEffect(() => {
        initializeDeathCount();
    }, []);

    return (
        <FlexColumn style={styles["memorial-animation--wrapper"]}>
            <MemorialTable />
            <FlexColumn style={styles["memorial-animation--subcontent-wrapper"]}>
                <TextChunk style={styles["memorial-animation--count"]} content={`${deathCount}`} isParagraph={true} />
                <TextChunk style={styles["memorial-animation--text"]} content={memorialTextContent} />
                <Button text={addPostButtonText} onClick={onClickAddPost} style={styles["memorial-animation--button"]} />
            </FlexColumn>
            {
                showAddPostModal && (
                    <AddPostModal onSubmitPost={onSubmitPost} onCloseModal={onCloseModal} />
                )
            }
        </FlexColumn>
    )
};

const CACHED_DEATH_COUNT_KEY = "online-memorial-count";

const getCachedDeathCount = () => {
    try {
        return parseInt(localStorage.getItem(CACHED_DEATH_COUNT_KEY)??"0");
    } catch (error) {
        return 0; 
    }
} 

const setCachedDeathCount = (value: number) => localStorage.setItem(CACHED_DEATH_COUNT_KEY, value.toString());

export default MemorialAnimation;
