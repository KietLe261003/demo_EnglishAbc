import axios from "axios";
const apiUrl=import.meta.env.URL_REQUEST;
export const request = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})
