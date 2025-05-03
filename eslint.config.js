// eslint.config.js
module.exports = [
  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': require('@angular-eslint/eslint-plugin'),
      '@angular-eslint/template': require('@angular-eslint/eslint-plugin-template'),
      'prettier': require('eslint-plugin-prettier')
    },
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },
    rules: {
      ...require('@angular-eslint/eslint-plugin').configs.recommended.rules,
      ...require('eslint-plugin-prettier').configs.recommended.rules
    }
  },
  {
    files: ['src/**/*.component.html'],
    plugins: {
      '@angular-eslint/template': require('@angular-eslint/eslint-plugin-template')
    },
    processor: '@angular-eslint/template/extract-inline-html',
    rules: {
      ...require('@angular-eslint/eslint-plugin-template').configs.recommended.rules
    }
  },
  {
    ignores: ['src/index.html']
  }
];
