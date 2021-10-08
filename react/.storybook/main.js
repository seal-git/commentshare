module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  // babel: async (options) => ({
  //   ...options,
  //   presets: [...options.presets, '@emotion/babel-preset-css-prop']
  // })
  // babel: (config) => {
  //   config.presets.push(require.resolve("@emotion/babel-preset-css-prop"));
  //   return config;
  // },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        cacheDirectory: true,
        presets: [require.resolve('@emotion/babel-preset-css-prop')],
      },
    });
    return config;
  }
}