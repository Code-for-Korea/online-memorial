import { PostAxios } from "../api";

export default class PostService {
    static async getPost(page: number, amount: number): Promise<{ [key: string]: any } | null> {
        const response = await PostAxios.get(`/posts?page=${page}&per_page=${amount}`);
        return response.data ?? null;
    }

    static async createPost(data: any) {
        const response = await PostAxios.post(`/posts`, data);
        return response.data;
    }
}
