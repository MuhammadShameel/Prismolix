/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add this 'qualities' array
    qualities: [75, 90], // Allows default (75) and 90

    // Your existing remotePatterns
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.prismolix.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "api.prismolix.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;