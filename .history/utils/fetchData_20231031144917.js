import axios from "axios"

const BASE_URL = process.env.SERVER_URL

export const postData = async (url, data, apikey = "") => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers":
                "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
            "x-api-key": apikey,
        }
        console.log(`url: ${BASE_URL}/${url}`)
        const res = await axios.post(`${BASE_URL}/${url}`, data, {
            headers: headers,
        })
        console.log("res in post data", res)
        return res.data
    } catch (error) {
        return error.message
    }
}
