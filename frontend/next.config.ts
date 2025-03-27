import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No rewrites needed for FastAPI, Vercel handles it
  eslint: {
    ignoreDuringBuilds: true,
  
  }
};

export default nextConfig;
