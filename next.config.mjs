/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/Ajaydwivedi2/**",
      },
    ],
  },
};

export default nextConfig;
