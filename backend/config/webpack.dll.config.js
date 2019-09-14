const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: process.cwd(),
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [__dirname, 'node_modules']
  },

  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'react-helmet',
      'styled-components',
      'react-loadable',
      'redux',
      'react-redux',
      'seamless-immutable',
      'lodash',
      'faker'
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../build/[name]-manifest.json'),
      name: '[name]'
    })
  ],
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../build/static'),
    library: '[name]'
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production';
  module.exports.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: false
      },
      cache: true,
      parallel: true
    })
  );
}
