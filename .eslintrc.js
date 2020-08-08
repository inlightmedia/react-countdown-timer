module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: true,
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      "no-multiple-empty-lines": ["error", { "max": 2 }],
      'indent': 'off',
      "no-console": 0
  },
  settings: {
      react: {
          pragma: 'React',
          version: '16.8',
      },
  },
};