/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Mandatory unless using a paid external loader (e.g., Cloudinary)
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
