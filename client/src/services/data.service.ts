import {DataAxios} from "../api";

export type VictimStatus = "dead" | "injured"
export type PercentageStatistic = "day" | "time"

export default class DataService {
    static async getTotalCount(victimStatus: VictimStatus, year: number) {
        const response = await DataAxios.get(`/casualty/${victimStatus}?year=${year}`);
        return response.data ?? null;
    }

    static async getStatistic(year: number, by: PercentageStatistic) {
        const response = await DataAxios.get(`/statistics/percent?year=${year}&by=${by}`);
        return response.data ?? null;
    }

    static async getNews() {
        const response = await DataAxios.get("/news/editor-pick");
        return response.data ?? null;
    }
}