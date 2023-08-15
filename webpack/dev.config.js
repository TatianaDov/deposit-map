const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const config = require('./config-app.json');

const cssLoader = require('./loaders/css');
const tsLoader = require('./loaders/typescript.develop');
const ENV = require('./env');
const moduleFederation = require('./federation').moduleFederation;

module.exports = {
  mode: 'development',
  devtool: 'source-map',
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
      tsLoader.develop,
      cssLoader.production,
    ]
  },

  devServer: {
    hot: true,
    port: ENV.PORT,
    liveReload: false,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },

  plugins: [
    new Dotenv(),
    moduleFederation,
    new HtmlWebpackPlugin({
      template: './webpack/templates/index.html',
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      ignoreOrder: true,
    }),
    new ReactRefreshWebpackPlugin({
      overlay: false,
      include: /\.src\/([jt]s?|[jt]sx?|flow)$/i
    }),
  ].filter(Boolean)
};
