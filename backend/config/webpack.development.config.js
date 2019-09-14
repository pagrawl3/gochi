const path = require('path');
const HappyPack = require('happypack');
const webpack = require('webpack');
// eslint-disable-next-line
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

var happyThreadPool = HappyPack.ThreadPool({ size: 4 });

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules\/)/,
        use: 'happypack/loader?id=jsx'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'jsx',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('../build/vendor-manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
    // new BundleAnalyzerPlugin()
  ]
};
