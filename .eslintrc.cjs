module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'spaced-comment': 'warn',
    'no-plusplus': 'off',
    'no-alert': 'off',
    'import/no-extraneous-dependencies': { devDependencies: true },
  },
};
