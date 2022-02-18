import React, {useCallback, useMemo, useState} from "react";
import DataTableRow from "../../../../dataTable/DataTableRow";
import styles from "./style.module.css";
import FlexColumn from "../../../../components/common/FlexColumn";
import Pagination from "../../../../components/pagination/Pagination";
import Container from "../../../../components/common/Container";

type MemorialDataTableProps = {}

const MemorialDataTable:React.FC<MemorialDataTableProps> = () => {

    const headerList = [
      "사고날짜",
        "요일",
        "사망",
        "부상",
        "도시(행정구역)",
        "사고유형",
        "세부내용",
    ];

    const dateFormatOption = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    } as Intl.DateTimeFormatOptions;

    const sampleData: {[key:string]: number|string}[] = Array.from(Array(35), () => ({
        date: new Date(Date.now()).toLocaleString('ko-KR', dateFormatOption).slice(0, -1),
        weekday: WEEKDAY[new Date(Date.now()).getDay()],
        deathCount: 11,
        injuredCount: 12,
        district: "김포시",
        accidentType: "충돌",
        articleUrl: "https://google.com",
    }));

    const dataPerPage = 10;
    const [postPageNum, setPostPageNum] = useState<number>(1);
    const updatePostPageNum = useCallback((newPageNum) => {
        setPostPageNum(newPageNum);
    }, []);

    const getLastPostPageNum = useCallback(() => {
        return Math.floor(sampleData.length / dataPerPage) + 1 ;
    }, [sampleData, dataPerPage]);

    const currentDatas = useMemo(() => {
        return sampleData.slice((postPageNum - 1) * dataPerPage, postPageNum * dataPerPage);
    }, [postPageNum, dataPerPage, sampleData]);

    return (
        <FlexColumn>
        <table className={styles["memorial-data-table"]}>
            <thead className={styles["memorial-data-table--header"]}>
                <tr className={styles["memorial-data-table--header-row"]}>
                    {
                        headerList.map((text) => <th className={styles["memorial-data-table--header-cell"]} key={`memorial-data-table-header-${text}`}>{text}</th>)
                    }
                </tr>
            </thead>
            <tbody>
            {
                currentDatas.map((data, idx) => (
                    <tr key={`memorial-data-table-r${idx}`}>
                        {
                            Object.keys(data).map((key) => (
                                <DataTableRow key={`memorial-data-table-r${idx}c${key}`} content={
                                    key === "articleUrl"
                                        ? <a className={styles["memorial-data-table--body-link"]} rel="noreferrer" target="_blank" href={data[key] as string}>사고 기사 보기</a>
                                        : key === "weekday" ? <span className={styles["memorial-data-table--body-highlight"]}>{data[key]}</span> : data[key]}
                                />
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
            <Container style={styles["memorial-data-table--pagination__wrapper"]}>
                <Pagination onPageChange={updatePostPageNum} lastPage={getLastPostPageNum()} initialPageNum={postPageNum}/>
            </Container>
        </FlexColumn>
    );
};

export default MemorialDataTable;

const WEEKDAY = [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
]