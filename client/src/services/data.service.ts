import { DataAxios } from "../api";
import {
    DataTableList,
    dateFormatOption,
    WEEKDAY
} from "../views/MemorialMainContent/MemorialInfomations/MemorialDataTable";
import { News } from "../views/MemorialMainContent/MemorialInfomations/MemorialArticles";
import {
    StatisticDataByDay
} from "../views/MemorialMainContent/MemorialInfomations/MemorialStatistics/Cards/StatisticByDayCard";

/**
 * data 부분 api 문서
 * http://13.125.214.78:8080/swagger-ui/index.html
 */

export type VictimStatus = "killed" | "injured"
export type PercentageStatistic = "day" | "time"

export default class DataService {
    static async getTotalCount(victimStatus: VictimStatus, year: number) {
        const response = await DataAxios.get(`/incidents/count?year=${year}`);
        if (response.status === 200) {
            return response.data[victimStatus];
        }
        // return 30;
    }

    static async getStatistic(year: number): Promise<StatisticDataByDay | null> {
        // const response = await DataAxios.get(`/incidents/aggregate?year=${year}`);
        // console.log(response);
        // return response.data ?? null;
        const days = [1, 2, 3, 4, 5, 6, 7];
        return days;
    }

    static async getNews(): Promise<News> {
        const response = await DataAxios.get("/news");
        return response.data ?? null;
    }

    static async getDataTable(page: number,): Promise<DataTableList> {
        // const response = await DataAxios.get(`/data-table?&page=${page}`);
        // return response.data ?? null;
        return Array.from(Array(35), () => ({
            date: `${new Date(Date.now()).toLocaleString('ko-KR', dateFormatOption).slice(0, -1)}/${WEEKDAY[new Date(Date.now()).getDay()]}`,
            deathCount: 11,
            injuredCount: 12,
            district: "김포시",
            accidentType: "충돌",
            articleUrl: "https://google.com",
        }));
    }
}
