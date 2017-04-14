var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main/frontend/index.js',
  output: {
    path: path.resolve('build/resources/main/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      // styl
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      // CSS
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
