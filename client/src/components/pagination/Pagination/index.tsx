import React, { useCallback, useState } from "react";
import Button from "../../common/Button";
import FlexRow from "../../common/FlexRow";
import PageNumber from "../PageNumber";
import styles from "./style.module.css";

type PaginationProps = {
    onPageChange: (page:number) => void;
    lastPage: number;
    initialPageNum?: number;
}

const Pagination:React.FC<PaginationProps> = ({ onPageChange, lastPage, initialPageNum }) => {

    const [currentPage, setCurrentPage] = useState<number>(initialPageNum??1);

    const onMoveButtonClick = useCallback((numberToAdd:number) => (evt: React.MouseEvent<HTMLButtonElement>) => {
        const newPageNum = currentPage + numberToAdd;
        console.log(newPageNum);
        
        if (newPageNum < 1 || newPageNum > lastPage) {
            return;
        }
        setCurrentPage(newPageNum);
        onPageChange(newPageNum);
    }, [currentPage]);

    return (
        <FlexRow style={styles["pagination--container__wrapper"]}>
            <Button text="<" onClick={onMoveButtonClick(-1)} style={styles["pagination--button"]}/>
            <PageNumber centerNumber={currentPage} oddNumberForDisplayCount={3} lastNumber={lastPage}/>
            <Button text=">" onClick={onMoveButtonClick(1)} style={styles["pagination--button"]}/>
        </FlexRow>
    )
};

export default Pagination;