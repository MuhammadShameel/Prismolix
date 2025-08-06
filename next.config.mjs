/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'prismolix.wasmer.app',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'prismolix.wasmer.app',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
