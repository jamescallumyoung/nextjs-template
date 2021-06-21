const withPlugins = require("next-compose-plugins");

// Next Config
const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// Plugin Config
const plugins = [];

module.exports = withPlugins(plugins, nextConfig);
