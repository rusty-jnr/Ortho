/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.ORTHO_BASE_URL,
  },
}

module.exports = nextConfig
