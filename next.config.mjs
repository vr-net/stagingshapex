// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
//   cacheOnFrontEndNav: true,
//   aggressiveFrontEndNavCaching: true,
//   reloadOnOnline: true,
//   swcMinify: true,
//   disable: process.env.NODE_ENV === "development",
//   workboxOptions: {
//     disableDevLogs: true,
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/splash",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test2.shapex.ir',
        port: '',
        // pathname: '',
      },
    ],
  },
};

export default nextConfig;
// module.exports = withPWA(nextConfig);
