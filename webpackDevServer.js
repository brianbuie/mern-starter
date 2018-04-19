const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'variables.env') });
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.js');
const ip = require('ip').address();
const port = process.env.WEBPACK_PORT;

webpackConfig.entry.unshift(`webpack-dev-server/client?http://${ip}:${port}`);
webpackConfig.output.publicPath = `http://${ip}:${port}/dist/`;

const devServer = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: path.join(__dirname, '/public/'),
  quiet: false,
  noInfo: false,
  publicPath: '/dist/',
  stats: 'minimal',
  disableHostCheck: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

devServer.listen(port, () => console.log(`Webpack running → PORT ${port}`));
