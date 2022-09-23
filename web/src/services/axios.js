import axios from "axios";

export const apiWB = axios.create({
    baseURL: 'http://localhost:3001/' //process.env.NEXT_PUBLIC_CADASTRO_API_HOST
});
