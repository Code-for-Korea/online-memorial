import React from "react";
import MemorialArticles from "./MemorialArticles";
import MemorialDataTable from "./MemorialDataTable";
import MemorialStatistics from "./MemorialStatistics";
import Divider from "../../../components/Divider";
import FlexColumn from "../../../components/common/FlexColumn";
import styles from "./style.module.css";
import Container from "../../../components/common/Container";

type MemorialInformationProps = {}

const MemorialInformation: React.FC<MemorialInformationProps> = () => {

    const statisticsTitle = `사회적 추모 아카이브 ${new Date(Date.now()).getFullYear()}`;
    const articlesTitle = "당신이 읽어야 할 산업재해 이야기";
    const dataTableTitle = "산업재해 노동자 목록";

    return (
        <FlexColumn style={styles["memorial-information"]}>
            <Container style={styles["memorial-information--section__wrapper"]}>
                <Divider title={statisticsTitle} />
                <MemorialStatistics />
            </Container>
            <Container style={styles["memorial-information--section__wrapper"]}>
                <Divider title={dataTableTitle} />
                <MemorialDataTable />
            </Container>
            <Container style={styles["memorial-information--section__wrapper"]}>
                <Divider title={articlesTitle} />
                <MemorialArticles />
            </Container>
        </FlexColumn>
    )
};

export default MemorialInformation;
