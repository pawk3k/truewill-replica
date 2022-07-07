module.exports = {
  ...require('config/eslintrc-client.js'),
  extends: ['plugin:@next/next/core-web-vitals'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
