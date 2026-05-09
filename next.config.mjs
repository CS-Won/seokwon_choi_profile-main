/** Must match the GitHub repository name (project Pages URL path). */
const basePath = "/seokwon_choi_profile-main";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  images: { unoptimized: true },
};

export default nextConfig;
