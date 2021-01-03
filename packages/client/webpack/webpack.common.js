const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');

const config = {
  entry: ['@babel/polyfill', path.resolve(SRC_PATH, 'index.jsx')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(SRC_PATH, 'index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': SRC_PATH,
      '@api': `${SRC_PATH}/api`,
      '@components': `${SRC_PATH}/components`,
      '@hooks': `${SRC_PATH}/hooks`,
      '@queries': `${SRC_PATH}/queries`,
      '@config': `${SRC_PATH}/config`,
      '@test-utils': `${SRC_PATH}/test-utils`,
    },
    extensions: ['.jsx', '.js', '.json'],
    modules: ['node_modules'],
  },
};

module.exports = config;
