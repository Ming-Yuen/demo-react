import axios from "axios";

interface ApiProps {
    endpointUrl: string,
    timeout: number,
}

const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_BE,
    timeout: 5000,
});

export const api = async (props: ApiProps) => {
    const backendUrl = process.env.REACT_APP_BE;
    const response = await instanceAxios.post(`${backendUrl}${props.endpointUrl}`)
                                .then((response)=>{
                                    console.log(response.data);
                                })
                                .catch((error)=>{
                                    console.error(error);
                                })
    return response;
}