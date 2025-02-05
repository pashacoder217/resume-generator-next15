/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: {
    resolve: { alias: { canvas: boolean; encoding: boolean } };
  }) => {
    // Handle PDF renderer
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    return config;
  },
  swcMinify: false,
};

export default nextConfig;
