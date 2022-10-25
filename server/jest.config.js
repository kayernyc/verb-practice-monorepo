/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@english(.*)$': '<rootDir>/src/models/english$1',
    '@german(.*)$': '<rootDir>/src/models/german$1',
    '@models(.*)$': '<rootDir>/src/models$1',
    '@data(.*)$': '<rootDir>/src/data$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
    '<rootDir>/scripts/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['dist', 'node_modules'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
