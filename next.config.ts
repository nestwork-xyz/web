import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.NEXT_ALLOWED_ORIGINS
    ? [process.env.NEXT_ALLOWED_ORIGINS]
    : undefined,
  experimental: { turbopackFileSystemCacheForDev: true },
  reactCompiler: true,
};

export default nextConfig;
