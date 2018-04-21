const path = require('path');

module.exports = {
  entry: ['./client/index'],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'client')
    },
    mainFiles: ['index'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
