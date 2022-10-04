import axios from "axios";

const test = "https://warbeasts-api.herokuapp.com";

export const apiWB = axios.create({
    baseURL: test //'http://localhost:3001/' //process.env.NEXT_PUBLIC_CADASTRO_API_HOST
});
