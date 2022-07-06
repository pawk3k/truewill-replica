module.exports = {
  extends: ['@masterborn/eslint-config/frontend/typescript', 'prettier'],
  plugins: ['testing-library', 'jest', 'prettier'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'prettier/prettier': ['error'],
    'prefer-arrow-callback': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
  },
};
