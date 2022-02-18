import {DataAxios} from "../api";
import {
    DataTableList,
    dateFormatOption,
    WEEKDAY
} from "../views/MemorialMainContent/MemorialInfomations/MemorialDataTable";
import {News} from "../views/MemorialMainContent/MemorialInfomations/MemorialArticles";
import {
    StatisticDataByDay
} from "../views/MemorialMainContent/MemorialInfomations/MemorialStatistics/Cards/StatisticByDayCard";
import {
    StatisticDataByTime
} from "../views/MemorialMainContent/MemorialInfomations/MemorialStatistics/Cards/StatisticByTimeCard";

export type VictimStatus = "dead" | "injured"
export type PercentageStatistic = "day" | "time"

export default class DataService {
    static async getTotalCount(victimStatus: VictimStatus, year: number) {
        // const response = await DataAxios.get(`/casualty/${victimStatus}?year=${year}`);
        // return response.data ?? null;
        return 30;
    }

    static async getStatistic(year: number, by: PercentageStatistic): Promise<StatisticDataByDay | StatisticDataByTime | null> {
        // const response = await DataAxios.get(`/statistics/percent?year=${year}&by=${by}`);
        // return response.data ?? null;
        const timeline = Array(24).fill(0).map((_, idx) => {
            if (idx < 6) return idx + 6
            else return idx - 6
        });
        const days = [1,2,3,4,5,6,7];
        return by === "time" ? timeline : days;
    }

    static async getNews(): Promise<News> {
        // const response = await DataAxios.get("/news/editor-pick");
        // return response.data ?? null;
        return [
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
        ] as News;
    }

    static async getDataTable(page: number,): Promise<DataTableList> {
        // const response = await DataAxios.get(`/data-table?&page=${page}`);
        // return response.data ?? null;
        return Array.from(Array(35), () => ({
            date: new Date(Date.now()).toLocaleString('ko-KR', dateFormatOption).slice(0, -1),
            weekday: WEEKDAY[new Date(Date.now()).getDay()],
            deathCount: 11,
            injuredCount: 12,
            district: "김포시",
            accidentType: "충돌",
            articleUrl: "https://google.com",
        }));
    }
}