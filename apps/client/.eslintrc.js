module.exports = {
  ...require('config/eslintrc-client.js'),
  // extends: ['plugin:@next/next/core-web-vitals'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
