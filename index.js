'use strict';

module.exports = {
  extends: ['eslint:recommended', 'plugin:ember-suave/recommended'],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
};
