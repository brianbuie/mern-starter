const pkg = require('./package.json');
module.exports = {
  apps: [
    {
      name: pkg.name,
      script: 'server/start.js',
      env: { COMMON_VARIABLE: 'true' },
      watch: ['server'],
      instances: 1
    },
    {
      name: 'webpack',
      script: 'webpackDevServer.js',
      env: { COMMON_VARIABLE: 'true' },
      watch: ['webpack.common.js', 'webpack.dev.js', 'webpackDevServer.js'],
      autorestart: false,
      instances: 1
    }
  ]
};
