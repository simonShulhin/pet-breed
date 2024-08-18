/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.thedogapi.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.thecatapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
