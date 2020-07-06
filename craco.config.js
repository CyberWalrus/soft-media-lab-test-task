const path = require('path');
const CracoAlias = require('craco-alias');
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
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        aliases: {
          '@': '/src',
        },
      },
    },
  ],
  jest: {
    configure(config) {
      config.roots = [
          '<rootDir>/src',
          // '<rootDir>/__mocks__' <-- add this path for dependency mocks
      ];
      config.setupFilesAfterEnv = ['<rootDir>config/jest/setup.js'];
      config.transformIgnorePatterns = [
        "<rootDir>/node_modules/lightweight-charts.js",
      ];
      return config;
    },
  },
};
