/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: "http://localhost:3001/v1/api",
        API_KEY:
            "7c6d6c57973bd235e17fbe4e18ff9648152dd4427d00f3afe116f725a3a7610cea3ae7f57cba66b4bc601da93657f61f5416a69c6456f9e4b722bf0484e24268",
    },
    images: {
        domains: ["down-vn.img.susercontent.com"],
    },
}

module.exports = nextConfig
