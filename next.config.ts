const nextConfig = {
  productionBrowserSourceMaps: false,
  logger: {
    error: () => {},
    warn: () => {},
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
