import axios from "axios"

const BASE_URL = process.env.SERVER_URL

export const postData = async (url, data) => {
    try {
        const res = await axios.post(`${BASE_URL}/${url}`, data, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key":
                    "7c6d6c57973bd235e17fbe4e18ff9648152dd4427d00f3afe116f725a3a7610cea3ae7f57cba66b4bc601da93657f61f5416a69c6456f9e4b722bf0484e24268",
            },
        })
        console.log(res)

        return res.data
    } catch (error) {
        return error.message
    }
}
