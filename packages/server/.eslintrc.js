const path = require('path');

const SERVER_ROOT_PATH = path.resolve(__dirname, './src');
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': SERVER_ROOT_PATH,
        },
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
