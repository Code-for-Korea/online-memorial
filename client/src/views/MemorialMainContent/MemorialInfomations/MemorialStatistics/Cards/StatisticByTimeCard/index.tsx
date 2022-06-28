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

type StatisticByTimeCardProps = {};

export type StatisticDataByTime = number[];

const StatisticByTimeCard: React.FC<StatisticByTimeCardProps> = () => {
    const [statisticByTime, setStatisticByTime] = useState<StatisticDataByTime>(
        []
    );

    const initializeStatisticByTime = useCallback(async () => {
        const data = await DataService.getStatisticByTime(
            new Date(Date.now()).getFullYear()
        );
        if (data !== null) {
            const startFromSixteen = [...data.slice(data.length - 6, data.length), ...data.slice(0, data.length - 6)];
            setStatisticByTime(startFromSixteen);
        }
    }, []);

    const title = "시간대별 발생건수";
    const subtitle = "전체 산업재해 사망사고";
    const timeline = Array(24)
        .fill(0)
        .map((_, idx) => {
            if (idx < 6) return idx + 6;
            else return idx - 6;
        });
    const data = useMemo(() => {
        const _data: ChartData<"bar"> = {
            labels: timeline,
            datasets: [
                {
                    label: title,
                    data: statisticByTime,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderWidth: 0,
                    borderRadius: 5,
                },
            ],
        };
        return _data;
    }, [statisticByTime]);
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
                    maxRotation: 0,
                    minRotation: 0,
                    color: "#ffffff",
                    callback: (value, index, _) => {
                        return value === 6 || value === 18 ? `${timeline[index]}` : "";
                    },
                },
            },
            y: {
                display: false,
            },
        },
    };

    useEffect(() => {
        initializeStatisticByTime();
    }, []);

    return (
        <BasicCard title={title} subtitle={subtitle}>
            <FlexRow style={styles["statistic-by-time--container__wrapper"]}>
                <Bar data={data} options={options} />
            </FlexRow>
        </BasicCard>
    );
};

export default StatisticByTimeCard;
