module.exports = {
  parserOptions: {
    ecmaVersion: 5
  },
  extends: [
    "eslint:recommended",
    "plugin:es5/no-es2015",
    "plugin:es5/no-es2016",
    "plugin:compat/recommended"
  ],
  plugins: ["es5"],
  env: {
    jquery: true,
    browser: true
  }
}
