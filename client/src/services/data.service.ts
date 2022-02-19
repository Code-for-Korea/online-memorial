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

/**
 * data 부분 api 문서
 * http://13.125.214.78:8080/swagger-ui/index.html#/news-rest-controller/getNewsLatestUsingGET
 */

export type VictimStatus = "killed" | "injured"
export type PercentageStatistic = "day" | "time"

export default class DataService {
    static async getTotalCount(victimStatus: VictimStatus, year: number) {
        // const response = await DataAxios.get(`/incidents/count?year=${year}`);
        // if (response.status === 200) {
        //     return response.data[victimStatus];
        // }
        return 30;
    }

    static async getStatistic(year: number): Promise<StatisticDataByDay | null> {
        // const response = await DataAxios.get(`/incidents/aggregate?year=${year}`);
        // console.log(response);
        // return response.data ?? null;
        const days = [1,2,3,4,5,6,7];
        return days;
    }

    static async getNews(): Promise<News> {
        // const response = await DataAxios.get("/news");
        // console.log(response);
        // return response.data ?? null;
        return [
            {
                title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
                description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
                thumbnail: null,
                url: "https://google.com"
            },
            {
                title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
                description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
                thumbnail: null,
                url: "https://google.com"
            },
            {
                title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
                description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
                thumbnail: null,
                url: "https://google.com"
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