import React, { useCallback } from "react";
import FlexRow from "../../common/FlexRow";
import TextChunk from "../../common/TextChunk";
import styles from "./style.module.css";

type PageNumberProps = {
    centerNumber: number;
    oddNumberForDisplayCount: number;
    lastNumber: number;
}

const PageNumber:React.FC<PageNumberProps> = ({ centerNumber, oddNumberForDisplayCount, lastNumber }) => {

    const getNumArrayOfRange = useCallback((start:number, end: number, step: number = 1) => {
        return Array.from({ length: (end - start) }, (_, idx) => start + (idx * step));
    }, []);

    const gap = Math.floor(oddNumberForDisplayCount / 2);
    let end = centerNumber <= gap ? centerNumber + gap * 2 + 1: centerNumber + gap * 2 - (gap - 1);

    if ((centerNumber <= gap || gap > lastNumber - centerNumber) && oddNumberForDisplayCount > centerNumber) {
        end = lastNumber < oddNumberForDisplayCount ? lastNumber : oddNumberForDisplayCount;
        end++;
    }

    let start = centerNumber <= gap ? 1 : centerNumber - gap ;

    if (end > lastNumber) {
        start = start - (gap - (lastNumber - centerNumber));
    }

    const numbersToDisplay = getNumArrayOfRange(start, end).filter((num) => num >= 1 && num <= lastNumber).sort((a, b) => a - b);

    console.log(start, end);
    
    console.log(numbersToDisplay);

    return (
        <FlexRow style={styles["pagination-page-number__wrapper"]}>
            {/* {
                numbersToDisplay[0] !== 1 && <TextChunk content="..." style={`${styles["pagination--page-number__default"]}`}/>
            } */}
            {
                numbersToDisplay.map((num, idx) => {
                    return <TextChunk 
                                key={`page-num-${num}-${idx}`}
                                content={num !== 0 ? String(num) : " "} 
                                style={`${styles["pagination--page-number__default"]} ${num === centerNumber ? styles["pagination--page-number__selected"] : ""}`}
                            />
                })
            }
            {/* {
                numbersToDisplay[numbersToDisplay.length - 1] !== lastNumber && <TextChunk content="..." style={`${styles["pagination--page-number__default"]}`}/>
            } */}
        </FlexRow>
    )
};

export default PageNumber;