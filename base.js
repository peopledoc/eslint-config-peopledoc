module.exports = {
  extends: ['eslint:recommended'],
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    // ES6
    'arrow-parens': ['error', 'always'],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-var': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-destructuring': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'eol-last': ['error', 'always']
  }
};
