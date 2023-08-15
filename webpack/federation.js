const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;
const config = require('./config-app.json');

const app_host_url = process.env.REMOTE_HOST_URL || '/remote_host/remoteEntry.js';

module.exports = {
  moduleFederation: new ModuleFederationPlugin({
    name: config.mfName,
    filename: 'remoteEntry.js',
    remotes: {
      host: `host@${app_host_url}`,
    },
    exposes: {
      './routeMapInfra': './src/external-modules/routeMap',
    },
    shared: {
      ...deps,
      "@consta/uikit": {
        singleton: true,
      },
      react: {
        singleton: true,
        requiredVersion: deps.react
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
      'react-router-dom': {
        singleton: true,
      },
      'mobx-react-lite': {
        singleton: true,
        version: deps['mobx-react-lite']
      },
      mobx: {
        singleton: true,
        version: deps['mobx']
      },
    },
  }),
}
