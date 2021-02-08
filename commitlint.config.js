module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'scope-case': [1, 'always', 'lower-case'],
    'header-max-length': [0, 'never', 250]
  }
};