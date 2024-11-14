module.exports = {
  root: true,
  extends: [
    'next',
    'eslint:recommended',
    'plugin:prettier/recommended', // Use Prettier with ESLint
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
  },
}
