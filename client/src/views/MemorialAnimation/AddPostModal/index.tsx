import React, { useCallback, useState } from "react";
import Button from "../../../components/common/Button";
import FlexColumn from "../../../components/common/FlexColumn";
import TextChunk from "../../../components/common/TextChunk";
import PostPaper from "../../../components/post/PostPaper";
import ModalWrapper from "../../../components/modal/ModalWrapper";
import styles from "./style.module.css";

type AddPostModalProps = {
    onSubmitPost: (text:string) => void;
    onCloseModal: () =>  void;
}

const AddPostModal:React.FC<AddPostModalProps> = ({ onSubmitPost, onCloseModal }) => {

    const [postText, setPostText] = useState("");
    const buttonText = "글 남기기";
    const title = "산업재해로 인해 사망하신 분들을 위해\n애도의 글을 남겨주세요"

    const onChangePostText = useCallback((evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(evt.currentTarget.value);
    }, []);

    const onSubmitButtonClick = useCallback((evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onSubmitPost(postText);
        onCloseModal();
    }, [postText]);

    const onClickStop = useCallback((evt: React.MouseEvent<HTMLElement>) => {
        evt.stopPropagation();
    }, [])

    return (
        <ModalWrapper onClose={onCloseModal}>
            <FlexColumn style={styles["add-post-modal--container__wrapper"]}>
                <TextChunk content={title} style={styles["add-post-modal--title"]}/>
                <form onSubmit={onSubmitButtonClick} className={styles["add-post-modal--form"]}>
                    <PostPaper>
                        <img className={styles["add-post-modal--form__textarea-icon"]} src={process.env.PUBLIC_URL + "/assets/image/write.svg"} alt={title} />
                        <textarea 
                            onChange={onChangePostText} 
                            name="memorial-text" 
                            className={styles["add-post-modal--form__textarea"]}
                            onClick={onClickStop}
                        ></textarea>
                    </PostPaper>
                    <Button type="submit" text={buttonText} onClick={onClickStop}/>
                </form>
            </FlexColumn>
        </ModalWrapper>
    )
};

export default AddPostModal;