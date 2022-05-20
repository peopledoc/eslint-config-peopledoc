module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    },

    requireConfigFile: false,
    babelOptions: {
      plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
    }
  },
  plugins: ["ember"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
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
