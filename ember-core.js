module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    "ember",
    "ember-suave"
  ],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:ember-suave/recommended",
    "./core.js"
  ],
  env: {
    browser: true
  },
  rules: {
    "ember/no-jquery": "warn",
    "ember-suave/require-access-in-comments": "off"
  }
}
