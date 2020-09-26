/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const SRC_PATH = path.resolve(__dirname, '../src');
const BUILD_PATH = path.resolve(__dirname, '../../../build/server');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(SRC_PATH, 'server.js'),
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, BUILD_PATH),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['app.js'],
    }),
  ],
  performance: {
    hints: 'warning',
  },
  optimization: {
    minimizer: [new UglifyJSPlugin()],
  },
};
