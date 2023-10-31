/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: "http://localhost:3001/v1/api",
    },
    images: {
        domains: ["down-vn.img.susercontent.com"],
    },
}

module.exports = nextConfig
