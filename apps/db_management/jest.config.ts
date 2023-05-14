export default {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  maxWorkers: '50%',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@controllers(.*)$': '<rootDir>/src/controllers/$1',
    '@germanHydrationFunctions(.*)$':
      '<rootDir>/src/models/german/hydrationFunctions/$1',
    '@germanUtilities(.*)$': '<rootDir>/src/models/german/utilities/$1',
    '@models(.*)$': '<rootDir>/src/models/models$1',
    '@utilities(.*)$': '<rootDir>/src/utilities/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
    '<rootDir>/**/scripts/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['dist', 'node_modules'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
