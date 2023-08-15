const ReactRefreshTypeScript = require('react-refresh-typescript');

module.exports = {
  develop: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
          transpileOnly: true,
        },
      },
    ],
  },
};
