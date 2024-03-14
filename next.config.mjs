/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.freeaikit.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
