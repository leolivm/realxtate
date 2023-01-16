/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
  env: {
    API_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3333/graphql'
        : '',
  },
}

module.exports = nextConfig
