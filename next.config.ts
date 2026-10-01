import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "192.168.29.164",
    "localhost",
  ],
};

export default nextConfig;
