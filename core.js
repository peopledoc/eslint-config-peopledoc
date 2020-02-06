module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [],
  rules: {
    // ES6
    "arrow-parens": ["error", "always"],
    "eol-last": ["error", "always"],
    "generator-star-spacing": ["error", { before: false, after: true }],
    "no-var": "error",
    "no-useless-rename": "error",
    "object-shorthand": ["error", "always"],
    "prefer-destructuring": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    semi: ["error", "never"]
  }
}
