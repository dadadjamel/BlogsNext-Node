/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Add image domains to support external images
    images: {
      domains: ['via.placeholder.com'], // Add the required domain here
    },
    // except for webpack, other parts are left as generated
    webpack: (config, context) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      return config;
    },
  };
  
  export default nextConfig;