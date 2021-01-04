module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ["ember", "ember-suave"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:ember-suave/recommended",
    "plugin:prettier/recommended",
    "./core.js",
  ],
  env: {
    browser: true,
  },
  rules: {
    "ember/no-jquery": "warn",
    "prettier/prettier": ["error", { semi: false, singleQuote: true }],
  },
  overrides: [
    // testem config file
    {
      files: ["testem.js"],
      rules: {
        camelcase: "off",
      },
    },
  ],
}
