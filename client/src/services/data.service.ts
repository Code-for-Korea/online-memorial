import { DataAxios } from "../api";
import {
    StatisticDataByDay
} from "../views/MemorialMainContent/MemorialInfomations/MemorialStatistics/Cards/StatisticByDayCard";

/**
 * data 부분 api 문서
 * http://13.125.214.78:8080/swagger-ui/index.html
 */

export type VictimStatus = "death" | "injury"
export type PercentageStatistic = "day" | "time"

export default class DataService {
    static async getTotalCount(victimStatus: VictimStatus, year: number): Promise<number | null> {
        const response = await DataAxios.get(`/stats/year/${year}`);
        if (response.status === 200) {
            return response.data[victimStatus];
        }
        return null;
    }

    static async getStatisticByTime(year: number): Promise<StatisticDataByDay | null> {
        const response = await DataAxios.get(`/stats/year/${year}`);
        if (response.status === 200) {
            return Object.entries(response.data)
                .filter(([key, _]) => key.includes("hour"))
                .map(([key, value]) => [parseInt(key.replace('hour_', '')), value])
                .sort((a, b) => (a[0] as number) - (b[0] as number))
                .map(([_, value]) => value as number);
        }
        return null;
    }

    static async getStatisticByDay(year: number): Promise<StatisticDataByDay | null> {
        const response = await DataAxios.get(`/stats/year/${year}`);
        if (response.status === 200) {
            return Object.entries(response.data)
                .filter(([key, _]) => key.includes("week"))
                .map(([key, value]) => [parseInt(key.replace('week_', '')), value])
                .sort((a, b) => (a[0] as number) - (b[0] as number))
                .map(([_, value]) => value as number);
        }
        return null;
    }

    static async getNews(): Promise<{ [key: string]: any }> {
        const response = await DataAxios.get("/stories");
        return response.data ?? null;
    }

    static async getDataTable(page: number,): Promise<{ [key: string]: any }> {
        const response = await DataAxios.get(`/disasters?&page=${page}per_page=${10}`);
        return response.data ?? null;
        //        return Array.from(Array(35), () => ({
        //            date: `${new Date(Date.now()).toLocaleString('ko-KR', dateFormatOption).slice(0, -1)}/${WEEKDAY[new Date(Date.now()).getDay()]}`,
        //            deathCount: 11,
        //            injuredCount: 12,
        //            district: "김포시",
        //            accidentType: "충돌",
        //            articleUrl: "https://google.com",
        //        }));
    }
}
