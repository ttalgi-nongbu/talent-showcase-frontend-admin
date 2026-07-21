import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      // Local Development
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
        pathname: "/talent-showcase/**",
      },

      // Production
      {
        protocol: "https",
        hostname: "storage.starion.app",
        pathname: "/talent-showcase/**",
      },
    ],
  },
};

export default nextConfig;