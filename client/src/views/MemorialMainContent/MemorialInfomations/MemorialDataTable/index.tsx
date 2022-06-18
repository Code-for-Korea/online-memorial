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
  weekday: string;
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
    setDataTableList(data);
  }, [postPageNum]);

  useEffect(() => {
    initializeDataTableList();
  }, []);

  const headerList = [
    "사고날짜",
    "요일",
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
                        사고 기사 보기
                      </a>
                    ) : key === "weekday" ? (
                      <span
                        className={
                          styles["memorial-data-table--body-highlight"]
                        }
                      >
                        {data[key]}
                      </span>
                    ) : (
                      `${data[key as keyof DataTableItem]}`
                    )
                  }
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
