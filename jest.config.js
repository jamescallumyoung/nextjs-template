module.exports = {
  rootDir: "src",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig-jest.json",
    },
  },
  preset: "ts-jest",
  // In webpack projects, we often allow importing things like css files or jpg
  // files, and let a webpack loader plugin take care of loading these resources.
  // Jest unit tests are run in node.js which doesn't know how to import these,
  // so this tells jest what to do for these.
  moduleNameMapper: {
    // Resolve .css and similar files to identity-obj-proxy instead.
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    // Resolve .jpg and similar files to mocked files
    ".+\\.(jpg|jpeg|png|gif)$": `<rootDir>/mocks/mock-img.jpg`,
    ".+\\.(eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/mocks/mock.js`,
  },
  // Tells Jest what folders to ignore for tests
  testPathIgnorePatterns: [`node_modules`, `\\.cache`],
  testURL: `http://localhost`,
};
