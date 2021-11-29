import React from "react";
import CarouselWrapper from "../../../../components/carousel/CarouselWrapper";
import StatisticByDayCard from "./Cards/StatisticByDayCard";
import StatisticByTimeCard from "./Cards/StatisticByTimeCard";
import TotalStatisticCard from "./Cards/TotalStatisticCard";

type MemorialStatisticsProps = {}

const MemorialStatistics:React.FC<MemorialStatisticsProps> = () => {

    return (
        <CarouselWrapper>
            <TotalStatisticCard/>
            <StatisticByDayCard/>
            <StatisticByTimeCard/>
        </CarouselWrapper>
    )
};

export default MemorialStatistics;