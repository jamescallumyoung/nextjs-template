const withPlugins = require('next-compose-plugins');

const nextConfig = {
  future: {
    webpack5: true,
  },
};

module.exports = withPlugins([
    // list plugins
], nextConfig);
