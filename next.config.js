/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configurations...
  
    // Set the favicon
    async headers() {
      return [
        {
          source: '/favicon.png',
          headers: [
            {
              key: 'Link',
              value: '/favicon.png',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  