const pkg = require('./package.json');
module.exports = {
  apps: [
    {
      name: pkg.name,
      script: 'server/start.js',
      env: { COMMON_VARIABLE: 'true' },
      watch: ['server'],
      instances: 1
    }
  ]
};
