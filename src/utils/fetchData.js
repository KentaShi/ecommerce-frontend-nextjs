import axios from "axios"

const BASE_URL = process.env.SERVER_URL

export const postData = async (url, data, apikey = "") => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": apikey,
        }
        console.log(`url: ${BASE_URL}/${url}`)
        const res = await axios.post(`${BASE_URL}/${url}`, data, {
            headers: headers,
        })
        return res.data
    } catch (error) {
        return error.message
    }
}
