import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import typescript from '@typescript-eslint/eslint-plugin';
import next from '@next/eslint-plugin-next';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintCustomRuleConfig = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['public/**', 'node_modules/**', '.cache/**', '.vscode/**', 'dist/**', '**/service/src/types/index.ts'],
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      next,
      'react-hooks': reactHooks,
      prettier: prettier,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug', 'table'] }],
      'no-undef': 'off',
      'no-use-before-define': 'off',
      'no-async-promise-executor': 'error',
      'no-extra-boolean-cast': 'error',
      'no-implicit-coercion': 'error',
      'no-var': 'error',
      'getter-return': 'warn',
      'prefer-const': 'error',
      'import/no-unresolved': 'off',
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      quotes: [2, 'single', { allowTemplateLiterals: true, avoidEscape: true }],

      // React rules
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-filename-extension': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prefer-stateless-function': 'off',
      'react/display-name': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/jsx-sort-props': [1, { multiline: 'last' }],
      // React Hooks rules
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

      // TypeScript rules
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': ['warn', { typedefs: false }],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/parameter-properties': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
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
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
          leadingUnderscore: 'allow',
        },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], selector: 'interface' },
        { format: ['PascalCase'], selector: 'typeAlias' },
      ],
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript'), ...eslintCustomRuleConfig];

export default eslintConfig;
