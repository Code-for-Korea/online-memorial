import React, { useCallback, useEffect, useMemo, useState } from "react";
import DataTableRow from "../../../../components/dataTable/DataTableRow";
import styles from "./style.module.css";
import FlexColumn from "../../../../components/common/FlexColumn";
import Pagination from "../../../../components/pagination/Pagination";
import Container from "../../../../components/common/Container";
import DataService from "../../../../services/data.service";

type MemorialDataTableProps = {};

export type DataTableItem = {
    date: string;
    deathCount: number;
    injuredCount: number;
    district: string;
    accidentType: string;
    articleUrl: string;
};

export type DataTableList = DataTableItem[];

const MemorialDataTable: React.FC<MemorialDataTableProps> = () => {
    const [postPageNum, setPostPageNum] = useState<number>(1);
    const [dataTableList, setDataTableList] = useState<DataTableList>([]);

    const initializeDataTableList = useCallback(async () => {
        const data = await DataService.getDataTable(postPageNum);
        if (data !== null) {
            setDataTableList(data["disasters"].map((accident: { [key: string]: any }) => {
                const date = new Date(Date.parse(accident["happened_on"].toString()));
                return {
                    date: `${date.toLocaleString('ko-KR', dateFormatOption).slice(0, -1)}/${WEEKDAY[date.getDay()]}`,
                    deathCount: accident["death"],
                    injuredCount: accident["injury"],
                    district: accident["area"],
                    accidentType: accident["category"],
                    articleUrl: accident["url"],
                };
            }));
        }
    }, [postPageNum]);

    useEffect(() => {
        initializeDataTableList();
    }, []);

    const headerList = [
        "사고날짜/요일",
        "사망",
        "부상",
        "도시(행정구역)",
        "사고유형",
        "세부내용",
    ];

    const dataPerPage = 10;
    const updatePostPageNum = useCallback((newPageNum: number) => {
        setPostPageNum(newPageNum);
    }, []);

    const getLastPostPageNum = useCallback(() => {
        return Math.floor(dataTableList.length / dataPerPage) + 1;
    }, [dataTableList, dataPerPage]);

    const currentDatas = useMemo(() => {
        return dataTableList.slice(
            (postPageNum - 1) * dataPerPage,
            postPageNum * dataPerPage
        );
    }, [postPageNum, dataPerPage, dataTableList]);

    return (
        <FlexColumn>
            <table className={styles["memorial-data-table"]}>
                <thead className={styles["memorial-data-table--header"]}>
                    <tr className={styles["memorial-data-table--header-row"]}>
                        {headerList.map((text) => (
                            <th
                                className={styles["memorial-data-table--header-cell"]}
                                key={`memorial-data-table-header-${text}`}
                            >
                                {text}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentDatas.map((data, idx) => (
                        <tr key={`memorial-data-table-r${idx}`}>
                            {Object.keys(data).map((key) => (
                                <DataTableRow
                                    key={`memorial-data-table-r${idx}c${key}`}
                                    content={
                                        key === "articleUrl" ? (
                                            <a
                                                className={styles["memorial-data-table--body-link"]}
                                                rel="noreferrer"
                                                target="_blank"
                                                href={data[key] as string}
                                            >
                                                <img
                                                    src={process.env.PUBLIC_URL + "/assets/icon/ic-link.svg"}
                                                    alt="기사 보러가기"
                                                    className={styles["memorial-data-table--body-link-icon"]}
                                                />
                                            </a>
                                        ) : `${data[key as keyof DataTableItem]}`}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Container style={styles["memorial-data-table--pagination__wrapper"]}>
                <Pagination
                    onPageChange={updatePostPageNum}
                    lastPage={getLastPostPageNum()}
                    initialPageNum={postPageNum}
                />
            </Container>
        </FlexColumn>
    );
};

export default MemorialDataTable;

export const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

export const dateFormatOption = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
} as Intl.DateTimeFormatOptions;
