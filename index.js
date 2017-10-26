const rules = {
  'semi': ['warn', 'never'],
  'quotes': 'warn',
  'max-len': ['warn', 160, 2],
  'generator-star-spacing': 'warn',
  'comma-dangle': ['warn', 'always-multiline'],
  'key-spacing': 'warn',
  'no-unused-vars': 'warn',
  'no-use-before-define': 'warn',
  'object-curly-spacing': ['warn', 'always'],
  'object-property-newline': 0,
  'space-before-function-paren': ['warn', 'never'],
  'eol-last': 'warn',
  'arrow-spacing': 'warn',
  'no-trailing-spaces': 'warn',
  'no-multiple-empty-lines': 'warn',
  'jsx-quotes': ['warn', 'prefer-single'],
  'react/jsx-key': 'warn',
  'react/self-closing-comp': 'warn',
  'react/prop-types': 'warn',
}

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-react',
  ],
  plugins: [
    'babel',
    'react',
  ],
  env: {
    node: true,
    browser: true,
  },
  rules,
}
