module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/src/test-config/setUpTests.js',
    '<rootDir>/src/test-config/matchMedia.js',
  ],
  moduleNameMapper: {
    // '^@[/](.+)': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@queries(.*)$': '<rootDir>/src/queries/$1',
  },
  globals: {
    __CONFIG__: true,
  },
};
