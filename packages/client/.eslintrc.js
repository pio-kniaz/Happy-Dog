const path = require('path');

const CLIENT_ROOT_PATH = path.resolve(__dirname, './src');
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/jsx-indent': [2],
    'no-case-declarations': [0],
    'react/no-array-index-key': [0],
    'jsx-a11y/click-events-have-key-events': [1],
    'jsx-a11y/no-noninteractive-element-interactions': [1],
    'no-plusplus': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': [1],
    'react/jsx-max-props-per-line': [1, { when: 'always' }],
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': CLIENT_ROOT_PATH,
        },
        extensions: ['.js', '.jsx'],
      },
    },
  },

  globals: {
    __DEV__: true,
  },

};
