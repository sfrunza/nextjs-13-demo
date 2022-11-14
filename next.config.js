/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeCss: true,
  },
  images: {
    domains: ['s3-media3.fl.yelpcdn.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
