/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true  // ← this turns off the Image API
  },
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "http://192.168.0.164:4000/api/:path*"
//       }
//     ];
//   }
};

module.exports = nextConfig;
