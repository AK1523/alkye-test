/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'untitled-twkmuar27a-uc.a.run.app', // Add your hostname here
          port: '', // Leave empty if no port is used
          pathname: '/media/images/**', // Match the directory where your images are located
        },
      ],
    },
  };
  

export default nextConfig;
