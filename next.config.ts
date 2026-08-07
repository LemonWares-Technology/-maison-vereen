import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone / LAN testing against the network URL (e.g. http://192.168.x.x:3000)
  allowedDevOrigins: ["192.168.100.17", "127.0.0.1", "localhost"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
