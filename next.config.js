/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '/**/**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/shop',
          destination: 'https://shotbypraise-store.vercel.app/',
          permanent: true,
        },
        {
          source: '/store',
          destination: 'https://shotbypraise-store.vercel.app/',
          permanent: true,
        },
      ]
    },
  };
  
  module.exports = nextConfig;