module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: ["ember", "ember-suave"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:ember-suave/recommended",
    "plugin:prettier/recommended",
    "./core.js"
  ],
  env: {
    browser: true
  },
  rules: {
    "prettier/prettier": ["error", { semi: false, singleQuote: true, trailingComma: "none" }]
  },
  overrides: [
    // testem config file
    {
      files: ["./testem.js"],
      rules: {
        camelcase: "off"
      }
    },
    {
      // Test files:
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended']
    }
  ]
}
