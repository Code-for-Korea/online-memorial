import React from "react";
import FlexColumn from "../../../../components/common/FlexColumn";
import NewsCard from "../../../../components/newsCard";
import styles from "./style.module.css";

type MemorialArticlesProps = {}

const MemorialArticles:React.FC<MemorialArticlesProps> = () => {

    const samples = [
        {
            id: 1,
            title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
            description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
            thumbnailUrl: null
        },
        {
            id: 2,
            title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
            description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
            thumbnailUrl: null
        },
        {
            id: 3,
            title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
            description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
            thumbnailUrl: null
        }
    ]

    return (
        <FlexColumn style={styles["news-card--list"]}>
            {
                samples.map(({id, title, description, thumbnailUrl}) => <NewsCard key={`news-card-${id}`} title={title} description={description} thumbnailUrl={thumbnailUrl??undefined}/> )
            }
        </FlexColumn>
    )
};

export default MemorialArticles;