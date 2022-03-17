import axios, { AxiosRequestConfig } from "axios";
import { shazan_token } from "../lib/config";
import Music from "../../@types/Music";

async function getMusic(tracks:Array<any>){
    let music: Music[] = []

    tracks.map((newMusic: any) => {
        const link_object = newMusic.hub.actions.find((object:any) => object.uri)
        music.push(
            {
                title: newMusic.title,
                url_song: link_object.uri,
                image: newMusic.images.coverart,
                artist:
                {
                    name: newMusic.subtitle,
                    id: newMusic.artists
                }
            }
        )
    })
    return music
}

export async function getRecommendMusic() {

    const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { pageSize: '20', startFrom: '0' },
        headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key': shazan_token
        }
    };
    try {

     const response= await  axios.request(options)
      
     
       const music : Music[] = await getMusic(response.data.tracks)
   
    return music
  
    } catch (error) {
        console.error(error);
        return []
    }
}