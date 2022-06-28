import { Axios } from "../api";

export default class PostService {
    static async getPost(page: number, amount: number): Promise<{ [key: string]: any } | null> {
        const response = await Axios.get(`/posts?page=${page}&per_page=${amount}`);
        return response.data ?? null;
    }

    static async createPost(data: any) {
        const response = await Axios.post(`/posts`, data);
        return response.data;
    }
}
