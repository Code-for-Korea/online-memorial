import React, { useCallback, useEffect, useState } from "react";
import FlexColumn from "../../../../../../components/common/FlexColumn";
import FlexRow from "../../../../../../components/common/FlexRow";
import TextChunk from "../../../../../../components/common/TextChunk";
import BasicCard from "../BasicCard";
import styles from "./style.module.css";
import DataService from "../../../../../../services/data.service";

type TotalStatisticCardProps = {}

const TotalStatisticCard:React.FC<TotalStatisticCardProps> = () => {


    const [dead, setDead] = useState(0);
    const [injured, setInjured] = useState(0);

    const title = "재해자 수"
    const subtitle = "전체 산업재해 사망사고"

    const updateDeadCount = useCallback(async () => {
        const data = await DataService.getTotalCount("killed", new Date(Date.now()).getFullYear());
        setDead(data);
    }, [])

    const updateInjuredCount = useCallback(async () => {
        const data = await DataService.getTotalCount("injured", new Date(Date.now()).getFullYear());
        setInjured(data);
    }, [])

    useEffect(() => {
        updateDeadCount();
        updateInjuredCount();
    }, [updateDeadCount, updateInjuredCount])

    return (
        <BasicCard title={title} subtitle={subtitle}>
            <FlexColumn style={styles["total-statistic--content"]}>
                <FlexRow style={styles["total-statistic--line"]}>
                    <TextChunk content="사망 : 모든 사고유형"/>
                    <TextChunk content={`${dead}명`}/>
                </FlexRow>
                <FlexRow style={styles["total-statistic--line"]}>
                    <TextChunk content="부상 : 모든 사고유형"/>
                    <TextChunk content={`${injured}명`}/>
                </FlexRow>
            </FlexColumn>
        </BasicCard>
    )
};

export default TotalStatisticCard;