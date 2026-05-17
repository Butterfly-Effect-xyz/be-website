import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
}

export default nextConfig
