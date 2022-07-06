/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['ui']);

const nextConfig = withTM({
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
