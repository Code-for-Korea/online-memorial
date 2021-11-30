import axios from "axios";

export const PostAxios = axios.create({
    baseURL: "http://localhost:8000/"
})

export const DataAxios = axios.create({
    baseURL: "http://localhost:8000/"
})