// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: ['error', 'single'],
    'react/prop-types': ['off'],
  },
  settings: {
    react: {
      version: '^18.0.0'
    }
  }
};
