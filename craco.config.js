const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [
      new StyleLintPlugin(
          {
            configBasedir: __dirname,
            context: path.resolve(__dirname, 'srcLiquidityProvider'),
            color: true,
            fix: true,
            lintDirtyModulesOnly: true,
          },
      ),
    ],
  },
  jest: {
    configure(config) {
      config.roots = [
          '<rootDir>/src',
      ];
      config.setupFilesAfterEnv = ['<rootDir>config/setup.js'];
      return config;
    },
  },
};
