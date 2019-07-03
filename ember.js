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
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["ember"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:ember-suave/recommended",
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
        "tests/dummy/config/**/*.js",
        "lib/*/index.js",
        "server/**/*.js"
      ],
      excludedFiles: [
        "addon/**",
        "addon-test-support/**",
        "app/**",
        "tests/dummy/app/**"
      ],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
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
        }
      )
    }
  ]
}
