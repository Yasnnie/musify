import axios, { AxiosRequestConfig } from "axios";
import { shazan_token } from "../lib/config";
export async function getRecommendType() {

    const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/list',
        headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key': shazan_token
        }
    };
    try {
        const response = await axios.request(options)
        return response.data.global.genres
    } catch (error) {
        console.error(error);
    }

}