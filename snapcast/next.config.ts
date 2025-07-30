import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
  images: {
    remotePatterns: [
      {
        hostname: "hameelhusnain-snapcast.b-cdn.net",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
};

export default nextConfig;
