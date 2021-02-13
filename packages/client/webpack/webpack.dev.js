const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const dotenv = require('dotenv');

const devEnv = dotenv.config({
  path: path.join(__dirname, '../.env.development')
});

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    overlay: true,
    port: 8080,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      __CONFIG__: JSON.stringify(devEnv.parsed)
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
