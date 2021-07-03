const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
          sourceMap: isDevelopment,
        },
        sassLoaderOptions: {
          sourceMap: isDevelopment,
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
};
