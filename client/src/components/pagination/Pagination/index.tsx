import React, { useCallback, useState } from "react";
import FlexRow from "../../common/FlexRow";
import PageNumber from "../PageNumber";
import styles from "./style.module.css";

type PaginationProps = {
    onPageChange: (page: number) => void;
    lastPage: number;
    initialPageNum?: number;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange, lastPage, initialPageNum }) => {

    const [currentPage, setCurrentPage] = useState<number>(initialPageNum ?? 1);

    const onMoveButtonClick = useCallback((numberToAdd: number) => (evt: React.MouseEvent<HTMLImageElement>) => {
        const newPageNum = currentPage + numberToAdd;
        if (newPageNum < 1 || newPageNum > lastPage) {
            return;
        }
        setCurrentPage(newPageNum);
        onPageChange(newPageNum);
    }, [currentPage, lastPage, onPageChange]);

    return (
        <FlexRow style={styles["pagination--container__wrapper"]}>
            <img
                src={process.env.PUBLIC_URL + "/assets/icon/ic-arrow-left.svg"}
                onClick={onMoveButtonClick(-1)}
                className={styles["pagination--button"]}
                alt="추모글 한 페이지 뒤로가기"
            />
            <PageNumber centerNumber={currentPage} oddNumberForDisplayCount={3} lastNumber={lastPage} />
            <img
                src={process.env.PUBLIC_URL + "/assets/icon/ic-arrow-right.svg"}
                onClick={onMoveButtonClick(1)}
                className={styles["pagination--button"]}
                alt="추모글 한 페이지 뒤로가기"
            />
        </FlexRow>
    )
};

export default Pagination;
