const babelParser = require('@babel/eslint-parser');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['.ai/', '.claude/', '.cursor/', '.codex/', '.gemini/', '.agents/', '.netlify/'] },
  js.configs.recommended,
  {
    files: ['*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'commonjs',
      },
    },
  },
  {
    files: ['netlify/functions/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          plugins: ['@babel/plugin-proposal-class-properties'],
          presets: ['@babel/preset-env'],
        },
        requireConfigFile: false,
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
];
