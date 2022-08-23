module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 0,
    'padded-blocks': 0,
    indent: 0,
    'eol-last': 0,
    'spaced-comment': 0,
    curly: 0,
    'vue/no-unused-vars': 0,
    'key-spacing': 0,
    'standard/object-curly-even-spacing': 0,
    'object-curly-spacing': 0,
    'standard/computed-property-even-spacing': 0,
    'vue/multi-word-component-names': 0,
    semi: 0
  }
}
