/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fastly.picsum.photos",
      "picsum.photos",
      "plus.unsplash.com",
      "free-images.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
