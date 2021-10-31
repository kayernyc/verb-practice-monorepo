/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleNameMapper: {
    '@german(.*)$': '<rootDir>/src/models/german$1',
    '@data(.*)$': '<rootDir>/src/data$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
