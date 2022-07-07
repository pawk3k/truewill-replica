const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['ui']);
const withSvgr = require('next-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
};

const configWithPlugins = withPlugins([[withTM], [withSvgr]], nextConfig);

module.exports = configWithPlugins;
