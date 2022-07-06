/* eslint-disable global-require */
/* eslint-disable import/extensions */
module.exports = {
  ...require('eslint-config-custom/eslintrc-frontend.js'),
  extends: ['plugin:@next/next/core-web-vitals'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
