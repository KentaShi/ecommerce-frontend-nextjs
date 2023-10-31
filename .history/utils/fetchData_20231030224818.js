import axios from "axios"

const BASE_URL = process.env.SERVER_URL

export const postData = async (url, data, apikey = "") => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": apikey,
        }
        console.log("data: " + JSON.stringify(data))
        const res = await axios.post(`${BASE_URL}/${url}`, data, {
            headers: headers,
        })

        console.log("res in post data", res)

        return res.data
    } catch (error) {
        return error.message
    }
}
