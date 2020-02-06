module.exports = {
  env: {
    browser: true,
    jquery: true
  },
  parserOptions: {
    ecmaVersion: 5
  },
  plugins: ["es5"],
  extends: [
    "eslint:recommended",
    "plugin:es5/no-es2015",
    "plugin:es5/no-es2016"
  ]
}
