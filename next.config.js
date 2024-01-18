/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: 'build',
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
    
  },
};

module.exports = nextConfig;