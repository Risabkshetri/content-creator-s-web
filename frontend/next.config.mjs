/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com', 'images.unsplash.com', 'picsum.photos', 'example.com', 'i.imgur.com', 'res.cloudinary.com'],
    },
    staticPageGenerationTimeout: 300,
};

export default nextConfig;
