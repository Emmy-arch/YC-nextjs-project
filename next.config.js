import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  },

  experimental: {
    // ppr: 'incremental'
  },

  devIndicators: {
    // position: "bottom-right",
  }
};

export default nextConfig;
