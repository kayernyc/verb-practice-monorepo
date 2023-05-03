import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/**/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
    '<rootDir>/**/scripts/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
