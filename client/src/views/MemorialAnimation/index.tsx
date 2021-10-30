import React, { useCallback, useState } from "react";
import MemorialTable from "../../components/animation/MemorialTable";
import Button from "../../components/common/Button";
import FlexColumn from "../../components/common/FlexColumn";
import TextChunk from "../../components/common/TextChunk";
import AddPostModal from "../../components/modal/AddPostModal";
import styles from "./style.module.css";

type MemorialAnimationProps = {
    count: number;
    year?: number;
}

const MemorialAnimation:React.FC<MemorialAnimationProps> = ({ count, year = new Date(Date.now()).getFullYear() }) => {

    const [showAddPostModal, setShowAddPostModal] = useState(false);
    const memorialTextContent = `${year}년, 산업 재해로 인해\n사망한 분들의 숫자입니다`;
    const addPostButtonText = "추모글 남기기";

    const onClickAddPost = (evt: React.MouseEvent<HTMLButtonElement>) => {
        setShowAddPostModal(true);
    }

    const onCloseModal = useCallback(() => {
        setShowAddPostModal(false);
    }, [])

    const onSubmitPost = useCallback((text:string) => {
        console.log(text);
    }, [])

    return (
        <FlexColumn style={styles["memorial-animation--wrapper"]}>
            <MemorialTable />
            <TextChunk style={styles["memorial-animation--count"]} content={`${count}`}/>
            <TextChunk style={styles["memorial-animation--text"]} content={memorialTextContent} />
            <Button text={addPostButtonText} onClick={onClickAddPost} style={styles["memorial-animation--button"]}/>
            {
                showAddPostModal && (
                    <AddPostModal onSubmitPost={onSubmitPost} onCloseModal={onCloseModal}/>
                )
            }
        </FlexColumn>
    )
};

export default MemorialAnimation;