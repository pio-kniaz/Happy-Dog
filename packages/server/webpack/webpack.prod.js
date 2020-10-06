/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '../../server');
const SRC_PATH = path.join(ROOT_PATH, '/src');
const BUILD_PATH = path.resolve(__dirname, '../../../build');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(SRC_PATH, 'server.js'),
  },
  target: 'node',
  node: {
    // DUE TO Webpack by default mocking the __dirname variable to / in bundle
    __dirname: false,
  },
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(ROOT_PATH, 'package.json'),
          to: path.resolve(BUILD_PATH),
        },
      ],
    }),
  ],
  performance: {
    hints: 'warning',
  },
  optimization: {
    minimizer: [new UglifyJSPlugin()],
  },
};
