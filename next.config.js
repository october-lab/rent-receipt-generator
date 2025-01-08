/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    images: {
        unoptimized: true, // Required for static export
    },
    basePath: process.env.NODE_ENV === 'production' ? '/<your-repo-name>' : '', // Replace with your repository name
    reactStrictMode: true,
};

module.exports = nextConfig;