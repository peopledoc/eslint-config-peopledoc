module.exports = {
  env: {
    browser: true,
    embertest: true
  },
  globals: {
    server: true, // mirage
    withFeature: true // feature flag
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["ember"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:ember-suave/recommended",
    "plugin:compat/recommended",
    "./core.js"
  ],
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "index.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/*/index.js",
        "server/**/*.js",
        "tests/dummy/config/**/*.js"
      ],
      excludedFiles: [
        "addon/**",
        "addon-test-support/**",
        "app/**",
        "tests/dummy/app/**"
      ],
      parserOptions: {
        sourceType: "script"
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ["node"],
      rules: Object.assign(
        {},
        require("eslint-plugin-node").configs.recommended.rules,
        {
          // add your custom rules and overrides for node files here

          // this can be removed once the following is fixed
          // https://github.com/mysticatea/eslint-plugin-node/issues/77
          "node/no-unpublished-require": "off"
        }
      )
    },
    // deactivate compat
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "index.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "server/**/*.js",
        "tests/dummy/config/**/*.js",
        "tests/**",
        "mirage/**"
      ],
      rules: {
        "compat/compat": false
      }
    }
  ],
  settings: {
    polyfills: ["Promise"]
  }
}
