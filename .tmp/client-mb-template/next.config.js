const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = withPlugins([withSentryConfig], nextConfig);
