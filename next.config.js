/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '/**/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/*',
        },
        {
          protocol: 'https',
          hostname: 'unsplash.com',
          pathname: '/*/*',
        },
        {
          protocol: 'https',
          hostname: 'scsorwfvynangbrcaquf.supabase.co',
          pathname: '/storage/v1/object/public/**/**',
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