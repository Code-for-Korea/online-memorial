import {PostAxios} from "../api";

export default class PostService {
    static async getPost(year: number, page: number, amount: number) {
        const response = await PostAxios.get(`/mourners/posts?year=${year}&page=${page}&amount=$${amount}`);
        return response.data ?? null;
    }
}