module.exports = {
  globals: {
    server: true // mirage
  },
  env: {
    embertest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: ["./core.js"]
}
