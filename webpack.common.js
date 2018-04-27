const path = require('path');
const webpack = require('webpack');

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
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      connect: ['react-redux', 'connect'],
      styled: ['styled-components', 'default'],
      theme: ['@app/Theme', 'theme']
    })
  ]
};
