module.exports = {
  extends: [
    "./ember-core.js"
  ],
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "testem.js",
        "config/**/*.js",
        "lib/*/index.js",
        "server/**/*.js"
      ],
      parserOptions: {
        sourceType: "script"
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ["node"],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      }
    },
    // testem config file
    {
      files: ["testem.js"],
      rules: {
        camelcase: "off"
      }
    }
  ]
}
