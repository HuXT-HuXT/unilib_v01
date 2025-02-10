import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "disk.yandex.ru",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ]
  }
};

export default nextConfig;
