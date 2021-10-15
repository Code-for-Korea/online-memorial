import React, { useCallback } from "react";
import FlexRow from "../../common/FlexRow";
import TextChunk from "../../common/TextChunk";
import styles from "./style.module.css";

type PageNumberProps = {
    centerNumber: number;  // 현재 페이지 넘버로, focus가 되어야 한다. 
    oddNumberForDisplayCount: number; // 현재 페이지 한개를 포함한, 화면상에 표시되는 페이지 숫자의 갯수. 홀수여야 한다.
    lastNumber: number; // 마지막 페이지 넘버
}

const PageNumber:React.FC<PageNumberProps> = ({ centerNumber, oddNumberForDisplayCount, lastNumber }) => {

    // start 이상, end 미만의 숫자 array를 반환한다.
    const getNumArrayOfRange = useCallback((start:number, end: number, step: number = 1) => {
        return Array.from({ length: (end - start) }, (_, idx) => start + (idx * step));
    }, []);

    // 현재 페이지 넘버가 가운데 있다고 했을 때, 왼쪽과 오른쪽에 몇 개가 표시되야 하는지 정의한다.
    const gap = Math.floor(oddNumberForDisplayCount / 2);

    let start = centerNumber - gap;
    let end = centerNumber + gap + 1; // end 미만이므로 1 추가

    // 현재 페이지가 1과 gap 사이에 있을 때,
    // 즉, 현재 페이지 넘버의 왼쪽에 표시할 숫자가 gap보다 모자랄 때
    if (centerNumber <= gap) {
        start = 1;
        end = oddNumberForDisplayCount + 1;
    }

    // 현재 페이지가 마지막 페이지에 가까워서
    // 현재 페이지 넘버 오른쪽에 표시할 숫자가 gap보다 모자랄 때
    if (gap > lastNumber - centerNumber) {
        start = lastNumber - gap * 2;
        end = lastNumber + 1
    }

    const numbersToDisplay = getNumArrayOfRange(start, end)
                                .filter((num) => num >= 1 && num <= lastNumber) // 처음과 끝이 범위 안에 있게 하여 예외 처리
                                .sort((a, b) => a - b);

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