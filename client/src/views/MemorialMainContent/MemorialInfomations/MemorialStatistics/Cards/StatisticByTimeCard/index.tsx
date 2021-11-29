import { ChartData, ChartOptions } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import FlexRow from "../../../../../../components/common/FlexRow";
import BasicCard from "../BasicCard";
import styles from "./style.module.css";

type StatisticByTimeCardProps = {}

const StatisticByTimeCard:React.FC<StatisticByTimeCardProps> = () => {
    
    const title = "시간대별 비율 (%)"
    const subtitle = "전체 산업재해 사망사고"
    const timeline = Array(24).fill(0).map((_, idx) => {
        if (idx < 6) return idx + 6
        else return idx - 6
    })
    const data: ChartData<"bar"> = {
        labels: timeline,
        datasets: [
            {
                label: title,
                data: timeline,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderWidth: 0,
                borderRadius: 5
            }
        ]
    }
    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                mode: "nearest"
            }
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    color: "#ffffff",
                    callback: (value, index, _) => {
                        return value === 6 || value === 18 ? `${timeline[index]}` : ""
                    }
                }
            },
            y: {
                display: false,
            }
        }
    }

    return (
        <BasicCard title={title} subtitle={subtitle}>
            <FlexRow style={styles["statistic-by-time--container__wrapper"]}>
                <Bar data={data} options={options} />
            </FlexRow>
        </BasicCard>
    )
};

export default StatisticByTimeCard;