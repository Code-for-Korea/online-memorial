import React, { useCallback, useEffect, useMemo, useState } from "react";
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

const MemorialArticles: React.FC<MemorialArticlesProps> = () => {

    const [news, setNews] = useState<News>([]);

    const initializeNews = useCallback(async () => {
        const data = await DataService.getNews();
        if (data !== null) {
            const newsList = data.map((article: { [key: string]: any }) => ({
                title: article["title"],
                description: article["body"],
                thumbnail: article["image"],
                url: article["url"],
            }))
            setNews(newsList);
        }
    }, []);

    useEffect(() => {
        initializeNews();
    }, []);

    return (
        <FlexColumn style={styles["news-card--list"]}>
            {
                news.map(({ title, description, thumbnail, url }) => (
                    <NewsCard
                        key={`news-card-${title}`}
                        title={title ?? "제목없음"}
                        description={description ?? "내용없음"}
                        thumbnail={thumbnail ?? undefined}
                        url={url}
                    />
                ))
            }
        </FlexColumn>
    )
};

export default MemorialArticles;
