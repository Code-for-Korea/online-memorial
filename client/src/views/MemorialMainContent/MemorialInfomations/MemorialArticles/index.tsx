import React, {useCallback, useEffect, useMemo, useState} from "react";
import FlexColumn from "../../../../components/common/FlexColumn";
import NewsCard from "../../../../components/newsCard";
import styles from "./style.module.css";
import DataService from "../../../../services/data.service";

type MemorialArticlesProps = {}

export type NewsItem = {
    id: number,
    title: string,
    description: string,
    thumbnailUrl: string | null,
};

export type News = NewsItem[];

const MemorialArticles:React.FC<MemorialArticlesProps> = () => {

    const [news, setNews] = useState<News>([]);

    const initializeNews = useCallback(async () => {
        const data = await DataService.getNews();
        setNews(data);
    }, []);

    useEffect(() => {
        initializeNews();
    }, []);

    return (
        <FlexColumn style={styles["news-card--list"]}>
            {
                news.map(({id, title, description, thumbnailUrl}) => <NewsCard key={`news-card-${id}`} title={title} description={description} thumbnailUrl={thumbnailUrl??undefined}/> )
            }
        </FlexColumn>
    )
};

export default MemorialArticles;