/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pictures.simplerdictionary.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
