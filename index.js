'use strict';

module.exports = {
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    "quotes": ["warn", "double"]
  }
};
