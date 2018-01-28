const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputFolder = path.resolve(__dirname, 'public');
const isDevMode = process.env.NODE_ENV !== 'production';
const extractSass = new ExtractTextPlugin({ filename: 'styles.css' });
const plugins = [ extractSass ];

module.exports = {
  context: __dirname,
  devtool: isDevMode ? 'inline-sourcemap' : false,
  entry: ['./js/main.js', './css/styles.scss'],
  output: {
    path: outputFolder,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { outputStyle: 'compressed'} }
        ]
      })
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 8192 }
      }]
    }]
  },
  plugins: isDevMode ? plugins : plugins.concat([
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]),
  devServer: {
    contentBase: outputFolder,
    publicPath: 'http://localhost:7777/',
    port: 7777,
    historyApiFallback: true
  }
};
