import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
}

export default nextConfig
