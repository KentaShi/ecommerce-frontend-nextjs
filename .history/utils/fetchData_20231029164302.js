import axios from "axios"

const BASE_URL = process.env.SERVER_URL

export const postData = async (url, data, apikey = "") => {
    try {
        console.log("data in postdata", data)
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": apikey,
        }
        let res = 1
        setTimeout(async () => {
            res = await axios.post(`${BASE_URL}/${url}`, data, {
                headers: headers,
            })
        }, 3000)
        console.log("res in post data", res)

        return res.data
    } catch (error) {
        return error.message
    }
}
