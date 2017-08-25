'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/base'
  ],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    /* our shared rules came here */
  }
};
