import React, {useCallback, useEffect, useMemo, useState} from "react";
import FlexColumn from "../../../../components/common/FlexColumn";
import NewsCard from "../../../../components/newsCard";
import styles from "./style.module.css";
import DataService from "../../../../services/data.service";

type MemorialArticlesProps = {}

export type NewsItem = {
    title: string,
    description: string,
    thumbnail: string | null,
    url: string,
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
                news.map(({title, description, thumbnail, url}) => (
                    <NewsCard
                        key={`news-card-${title}`}
                        title={title}
                        description={description}
                        thumbnail={thumbnail??undefined}
                        url={url}
                    />
                ) )
            }
        </FlexColumn>
    )
};

export default MemorialArticles;