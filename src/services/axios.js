import axios from "axios";

// const test = "https://warbeasts-api.herokuapp.com";
// const test = 'http://localhost:3001/';
// const test = process.env.WB_DB_MANAGER;
const test = 'https://wb-db-manager-vrzo.onrender.com';

export const apiWB = axios.create({
    baseURL: test, // //process.env.NEXT_PUBLIC_CADASTRO_API_HOST
    
});


// REMOVER ESSE TEXTO