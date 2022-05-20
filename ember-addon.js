module.exports = {
  extends: ["./ember-core.js"],
  overrides: [
    // node files
    {
      files: [
        "./.eslintrc.js",
        "./.prettierrc.js",
        "./.template-lintrc.js",
        "./ember-cli-build.js",
        "./index.js",
        "./testem.js",
        "./blueprints/**/index.js",
        "./config/**/*.js",
        "./tests/dummy/config/**/*.js"
      ],
      parserOptions: {
        sourceType: "script"
      },
      env: {
        browser: false,
        node: true
      },
      extends: ["plugin:n/recommended"]
    }
  ]
}
