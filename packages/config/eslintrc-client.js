module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'next', // next specific
    'airbnb', // covers react
    'airbnb-typescript', // covers ts
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    // #region from mb-common
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    'no-confusing-arrow': 'warn',
    'class-methods-use-this': 0,
    'global-require': 0,
    'valid-jsdoc': 1,
    complexity: ['error', 3],
    'max-nested-callbacks': ['error', 2],
    'max-depth': ['error', 3],
    'max-classes-per-file': ['error', 1],
    'no-else-return': 'error',
    'max-params': ['error', 7],
    'function-paren-newline': ['error', 'consistent'],
    // #endregion from mb-common

    // #region react
    'prettier/prettier': ['error'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'no-unused-vars': 'off', // note you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],

    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', 'parent', ['sibling', 'index']],
      },
    ],
    // 'prefer-arrow-callback': 'off',
    // 'no-restricted-exports': 'off',
    // #endregion react

    // #region next
    '@next/next/no-html-link-for-pages': 'off',
    // #endregion next

    // #region a11y
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    // #endregion a11y
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
        // #region from mb-common
        'max-nested-callbacks': ['error', 5],
        'max-depth': ['error', 5],
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        // #endregion from mb-common
      },
    },
  ],
  ignorePatterns: [
    '.next',
    '.turbo',
    '**/*.js',
    '**/*.json',
    'coverage',
    'dist',
    'node_modules',
    'public',
    'styles',
  ],
};
