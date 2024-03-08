import axios from 'axios';

export const instanceAxios = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});

export async function httpPost(endpointUrl:string, request:any, header:any): Promise<any> {
    const url = process.env.REACT_APP_BACKEND_URL + endpointUrl;
    try {
        const response = await instanceAxios.post(`${url}${header}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export async function httpGet(endpointUrl:string) {
    const url = process.env.REACT_APP_BACKEND_URL + endpointUrl;
    try {
        console.log(url);
        const response = await instanceAxios.get(`${url}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}