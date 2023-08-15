const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config-app.json');

const cssLoader = require('./loaders/css');
const tsLoader = require('./loaders/typescript.base');
const ENV = require('./env');
const moduleFederation = require('./federation').moduleFederation;

module.exports = {
  mode: 'production',
  entry: `${ENV.SRC_DIR}/index.js`,

  optimization: {
    runtimeChunk: false
  },
  output: {
    uniqueName: config.uniqueName,
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      tsLoader.base,
      cssLoader.production,
    ]
  },

  plugins: [
    moduleFederation,
    new HtmlWebpackPlugin({
      template: './webpack/templates/index.html',
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      ignoreOrder: true,
    }),
  ].filter(Boolean)
};
