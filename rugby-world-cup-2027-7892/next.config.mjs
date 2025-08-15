/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  
  // Image configuration
  images: {
    domains: ['images.unsplash.com', 'www.austadiums.com', 's.ndtvimg.com', 'assets.architectureanddesign.com.au', 'ndy.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // TypeScript and ESLint settings
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;