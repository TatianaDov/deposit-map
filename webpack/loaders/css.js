const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  develop: {
    test: /\.((c|sa|sc)ss)$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
  production: {
    test: /\.((c|sa|sc)ss)$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
};
