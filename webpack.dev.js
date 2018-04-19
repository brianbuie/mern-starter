const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'variables.env') });
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: '0.0.0.0',
    publicPath: '/dist/',
    port: process.env.WEBPACK_PORT
  },
  devtool: 'source-map'
});
