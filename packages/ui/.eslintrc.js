module.exports = {
  ...require('eslint-config-custom/eslintrc-frontend.js'),
  extends: ['plugin:@next/next/core-web-vitals'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
