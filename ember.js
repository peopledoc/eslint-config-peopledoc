module.exports = {
  env: {
    browser: true,
    embertest: true
  },
  globals: {
    server: true, // mirage
    withFeature: true // feature flag
  },
  extends: ["eslint:recommended", "plugin:ember-suave/recommended", "./core.js"]
};
