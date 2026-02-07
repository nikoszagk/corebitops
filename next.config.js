/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
