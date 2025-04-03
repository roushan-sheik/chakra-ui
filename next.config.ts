import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_ENV_ORIGN,
  images: {
    domains: [process.env.NEXT_ENV_ORIGN || 'http://localhost:3000'],
    path: `${process.env.NEXT_ENV_ORIGN}/_next/image`,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skin-seoul.com',
      },
      {
        protocol: 'https',
        hostname: 'dev.skin-seoul.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-webapp.skin-seoul.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
};

export default nextConfig;
