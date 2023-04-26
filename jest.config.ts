import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  preset: 'ts-jest',
  testEnvironment: 'node16',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
