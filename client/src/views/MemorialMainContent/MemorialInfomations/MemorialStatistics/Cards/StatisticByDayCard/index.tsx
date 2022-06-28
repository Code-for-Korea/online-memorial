import {
    Chart as ChartJS,
    ChartData,
    ChartOptions,
    registerables,
} from "chart.js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import FlexRow from "../../../../../../components/common/FlexRow";
import BasicCard from "../BasicCard";
import styles from "./style.module.css";
import DataService from "../../../../../../services/data.service";

ChartJS.register(...registerables);

type StatisticByDayCardProps = {};

export type StatisticDataByDay = number[];

const StatisticByDayCard: React.FC<StatisticByDayCardProps> = () => {
    const [statisticByDay, setStatisticByDay] = useState<StatisticDataByDay>([]);

    const initializeStatisticByDay = useCallback(async () => {
        const data = await DataService.getStatisticByDay(
            new Date(Date.now()).getFullYear()
        );
        if (data !== null) {
            setStatisticByDay(data);
        }
    }, []);

    const title = "요일별 발생건수";
    const subtitle = "전체 산업재해 사망사고";
    const data = useMemo(() => {
        const _data: ChartData<"bar"> = {
            labels: ["월", "화", "수", "목", "금", "토", "일"],
            datasets: [
                {
                    label: title,
                    data: statisticByDay,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderWidth: 0,
                    borderRadius: 5,
                },
            ],
        };
        return _data;
    }, [statisticByDay]);
    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                mode: "nearest",
            },
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    color: "#ffffff",
                },
            },
            y: {
                display: false,
            },
        },
    };

    useEffect(() => {
        initializeStatisticByDay();
    }, []);

    return (
        <BasicCard title={title} subtitle={subtitle}>
            <FlexRow style={styles["statistic-by-day--container__wrapper"]}>
                <Bar data={data} options={options} />
            </FlexRow>
        </BasicCard>
    );
};

export default StatisticByDayCard;
