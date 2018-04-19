const path = require('path');
const BundleSize = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

module.exports = {
  entry: './client/index',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    mainFiles: ['index'],
    modules: [path.resolve('./client'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new BundleSize('./size-report.txt')]
};
