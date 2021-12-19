module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',

    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: ['/*.*', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-restricted-syntax': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'no-bitwise': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
