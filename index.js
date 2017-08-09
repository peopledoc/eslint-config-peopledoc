'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:ember-suave/recommended'],
  rules: {
    "quotes": ["warn", "double"]
  }
};
