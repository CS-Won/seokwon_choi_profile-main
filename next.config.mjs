const basePath = "/CS-Won";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  images: { unoptimized: true },
};

export default nextConfig;
