const withPlugins = require('next-compose-plugins');
const withLess = require("next-with-less");

// Next Config
const nextConfig = {
  future: {
    webpack5: true,
  },
};

// Plugin Config
const plugins = [
  withLess,
];

module.exports = withPlugins(plugins, nextConfig);
