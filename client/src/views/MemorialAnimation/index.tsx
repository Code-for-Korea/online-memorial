import React from "react";
import MemorialTable from "../../components/animation/MemorialTable";
import Button from "../../components/common/Button";
import FlexColumn from "../../components/common/FlexColumn";
import TextChunk from "../../components/common/TextChunk";
import styles from "./style.module.css";

type MemorialAnimationProps = {
    count: number;
    year?: number;
}

const MemorialAnimation:React.FC<MemorialAnimationProps> = ({ count, year = new Date(Date.now()).getFullYear() }) => {

    const memorialTextContent = `${year}년, 산업 재해로 인해\n사망한 분들의 숫자입니다`;
    const addPostButtonText = "추모글 남기기";

    const onClickAddPost = (evt: React.MouseEvent<HTMLButtonElement>) => {
        console.log("TODO : show post input section");
    }

    return (
        <FlexColumn style={styles["memorial-animation--wrapper"]}>
            <MemorialTable />
            <TextChunk style={styles["memorial-animation--count"]} content={`${count}`}/>
            <TextChunk style={styles["memorial-animation--text"]} content={memorialTextContent} />
            <Button text={addPostButtonText} onClick={onClickAddPost} style={styles["memorial-animation--button"]}/>
        </FlexColumn>
    )
};

export default MemorialAnimation;