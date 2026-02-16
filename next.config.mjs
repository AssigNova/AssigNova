/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  images: {
    unoptimized: true, // Mandatory unless using a paid external loader (e.g., Cloudinary)
  },
  /* config options here */
  output: "export",
};

export default nextConfig;
