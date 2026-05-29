import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.nexovision.io" },
    ],
  },
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ["192.168.1.5"],
};

export default nextConfig;
