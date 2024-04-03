/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
