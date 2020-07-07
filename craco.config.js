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
};
