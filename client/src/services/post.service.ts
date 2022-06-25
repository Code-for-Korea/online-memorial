import { PostAxios } from "../api";
import { PostDataList } from "../components/post/PostList";

export default class PostService {
    static async getPost(year: number, page: number, amount: number): Promise<PostDataList | null> {
        // const response = await PostAxios.get(`/mourners/posts?year=${year}&page=${page}&amount=$${amount}`);
        // return response.data ?? null;
        return [
            {
                id: 1,
                content: `앞으로 저는 빠르게 지나가다가 보지못한 힘없고 소외받은 자들을 배려하며 살아가겠습니다
                - 김**`
            },
            {
                id: 2,
                content: `꿈많은 19세 청년을 치어죽인 것은 열차가 아니라 오직 ‘빨리 빨리’만 외치는 ‘우리’입니다. 앞으로 저는 빠르게 지나가다가 보지못한 힘없고 소외받은 자들을 배려하며 살아가겠습니다
                - 김**`
            },
            {
                id: 3,
                content: `저는 반수를 해서 지금 대학을 다니고 있는 21살 대학생이에요. 매일 신천에서 신촌을 왔다갔다 하고 있지요 친구랑 동년배인 친구들, 매일 보는데 같은 나이에 친구가 매일 지나치는 여기 구의역에서 사고를 당하고, 억울하게 죽은게 너무가슴이 아파요. 친구도 대학가서 원하는 공부하고, 친구들이랑 술도 마시고, 예쁜 여자친구도 사귀어보고 할 수있…`
            },
            {
                id: 4,
                content: `저는 반수를 해서 지금 대학을 다니고 있는 21살 대학생이에요. 매일 신천에서 신촌을 왔다갔다 하고 있지요 친구랑 동년배인 친구들, 매일 보는데 같은 나이에 친구가 매일 지나치는 여기 구의역에서 사고를 당하고, 억울하게 죽은게 너무가슴이 아파요. 친구도 대학가서 원하는 공부하고, 친구들이랑 술도 마시고, 예쁜 여자친구도 사귀어보고 할 수있…`
            },
            {
                id: 5,
                content: `저는 반수를 해서 지금 대학을 다니고 있는 21살 대학생이에요. 매일 신천에서 신촌을 왔다갔다 하고 있지요 친구랑 동년배인 친구들, 매일 보는데 같은 나이에 친구가 매일 지나치는 여기 구의역에서 사고를 당하고, 억울하게 죽은게 너무가슴이 아파요. 친구도 대학가서 원하는 공부하고, 친구들이랑 술도 마시고, 예쁜 여자친구도 사귀어보고 할 수있…`
            }
        ];
    }
    static async createPost(data: any) {
        const response = await PostAxios.post(`/posts`, data);
        return response.data;
    }
}
