module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [],
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-multiple-empty-lines': 0
  }
}
