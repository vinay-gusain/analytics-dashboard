/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.placeholder.com'],
  },
  // Enable optimizations for better Lighthouse score
  swcMinify: true,
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig