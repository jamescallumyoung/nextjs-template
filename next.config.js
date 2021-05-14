const withPlugins = require("next-compose-plugins");

// Next Config
const nextConfig = {
  future: {
    webpack5: true,
  },
};

// Plugin Config
const plugins = [];

module.exports = withPlugins(plugins, nextConfig);
