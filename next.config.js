/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath: "/rent-receipt-generator",
    reactStrictMode: true,
};

module.exports = nextConfig;