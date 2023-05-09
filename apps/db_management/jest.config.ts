module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts', 'scripts/**/*.ts', '!./src/data/**/*'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@controllers(.*)$': '<rootDir>/src/controllers/$1',
    '@models(.*)$': '<rootDir>/src/models/models$1',
    '@utilities(.*)$': '<rootDir>/src/utilities/$1',
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
