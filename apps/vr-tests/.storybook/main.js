// your app's webpack.config.js
const custom = require('@fluentui/scripts/storybook/webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  babel: {},
  typescript: {
    // disable react-docgen-typescript (totally not needed here, slows things down a lot)
    reactDocgen: false,
  },
  webpackFinal: config => {
    const finalConfig = custom(config);

    finalConfig.module.rules.unshift({
      test: /\.(ts|tsx)$/,
      use: [{ loader: '@fluentui/make-styles-webpack-loader' }],
    });

    return finalConfig;
  },
  addons: ['@storybook/addon-actions'],
};
