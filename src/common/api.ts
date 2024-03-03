import axios from 'axios';

export interface ApiConfig {
    endpointUrl: string,
    timeout: number,
    header?: ApiHeader | null;
}

export interface ApiHeader {

}

export const instanceAxios = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});

export const httpPost = async (props: ApiConfig) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    try {
        const response = await instanceAxios.post(`${process.env.REACT_APP_BACKEND_URL}${props.endpointUrl}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function httpGet(props: ApiConfig) {
    const url = process.env.REACT_APP_BACKEND_URL + props.endpointUrl;
    try {
        console.log(url);
        const response = await instanceAxios.get(`${url}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}