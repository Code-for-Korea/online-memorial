import { ChartData, ChartOptions, ScaleOptionsByType } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import Container from "../../../../../../components/common/Container";
import BasicCard from "../BasicCard";
import styles from "./style.module.css";

type StatisticByDayCardProps = {}

const StatisticByDayCard:React.FC<StatisticByDayCardProps> = () => {

    const title = "요일별 비율 (%)"
    const subtitle = "전체 산업재해 사망사고"
    const data: ChartData<"bar"> = {
        labels: ["월", "화", "수", "목", "금", "토", "일"],
        datasets: [
            {
                label: title,
                data: [10, 20, 30, 5, 5, 20, 10],
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderWidth: 0,
                borderRadius: 5
            }
        ]
    }
    const options: ChartOptions<"bar"> = {
        responsive: true,
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
                    color: "#ffffff"
                }
            },
            y: {
                display: false,
            }
        }
    }

    return (
        <BasicCard title={title} subtitle={subtitle}>
            <Container style={styles["statistic-by-day--container__wrapper"]}>
                <Bar data={data} options={options}/>
            </Container>
        </BasicCard>
    )
};

export default StatisticByDayCard;