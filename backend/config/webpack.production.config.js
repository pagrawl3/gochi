const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  name: 'client',
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../build/static/'),
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules\/)/,
        use: 'happypack/loader'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../build/vendor-manifest.json')
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: false
      },
      cache: true,
      parallel: true
    }),
    new HappyPack({
      loaders: ['babel-loader']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
