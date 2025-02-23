// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended, // Base JS rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      globals: {
        document: 'readonly', // Inform ESLint that document is a global variable
        confirm: 'readonly', // Similarly for confirm
        console: 'readonly', // Similarly for console
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Fix "React must be in scope" error
      'no-unused-vars': 'warn',
    },
  },
];
