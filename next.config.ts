import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hypefly.co.in',
      },
      {
        protocol: 'https',
        hostname: 'd3v0px0pttie1i.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'dashboard.getvantage.co',
      },
      {
        protocol: 'https',
        hostname: 'mumbairetinacenter.com',
      },
    ],
  },
};

export default nextConfig;
