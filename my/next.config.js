/** @type {import('next').NextConfig} */
const nextConfig = {}

const webpackConfig = (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};

module.exports = {
  ...nextConfig,
  webpack: webpackConfig,
};