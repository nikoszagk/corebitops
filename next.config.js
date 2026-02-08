/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    NEXT_PUBLIC_COMMIT_SHA: process.env.GITHUB_SHA || process.env.VERCEL_GIT_COMMIT_SHA || 'development',
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
}

module.exports = nextConfig
