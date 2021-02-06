module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/src/test-utils/setUpTests.js',
    '<rootDir>/src/test-utils/matchMedia.js',
    '<rootDir>/src/test-utils/window.location.js',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@api(.*)$': '<rootDir>/src/api/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@queries(.*)$': '<rootDir>/src/queries/$1',
    '^@config(.*)$': '<rootDir>/src/config/$1',
    '^@test-utils(.*)$': '<rootDir>/src/test-utils/$1',
  },
  globals: {
    __CONFIG__: true,
  },
};
