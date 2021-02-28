module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'scope-case': [1, 'always', 'lower-case'],
    'subject-case': [0, 'never', 'lower-case'],
    'header-max-length': [0, 'never', 250]
  }
};