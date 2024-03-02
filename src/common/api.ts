import axios from "axios";

export interface ApiConfig {
    endpointUrl: string,
    timeout: number,
    header?: ApiHeader | null;
}

export interface ApiHeader{

}

export const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_BE,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

export const httpPost = async (props: ApiConfig) => {
    const backendUrl = process.env.REACT_APP_BE;
    try{
        const response = await instanceAxios.post(`${backendUrl}${props.endpointUrl}`);
        return response.data;
    }catch(error){
        console.error(error);
    }
}