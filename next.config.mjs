/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://syeonjae.github.io/" : "",
};

export default nextConfig;
