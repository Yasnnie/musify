import axios from "axios"

export async function ServiceLogin() {
    const value = {
        client_id: "0d400a35e08c48f5bf40e68bcf914e4d",
        response_type: "code",
        redirect_uri: "com.yasnnie.musify://callback"
    }
    try {
        const response = await axios.get(`https://accounts.spotify.com/authorize/?client_id=0d400a35e08c48f5bf40e68bcf914e4d&response_type=code&redirect_uri=com.yasnnie.musify://callback`)
        console.log(response.data)
    } catch (err) {
        console.log("erro")
        console.log(err)
    }
}