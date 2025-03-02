import pluginJs from '@eslint/js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      indent: ['error', 2],
      'no-console': 'error',
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: true,
          exceptions: {
            VariableDeclarator: true,
          },
        },
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      'no-trailing-spaces': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'react/jsx-sort-props': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/ts/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@stylistic/ts/semi': 'error',
      '@typescript-eslint/no-shadow': 'error',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    files: ['scripts/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: ['!**/.server', '!**/.client', '**/templates/'],
  },
];
