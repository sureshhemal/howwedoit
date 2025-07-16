// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      semi: [2, 'never'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'linebreak-style': ['error', 'unix'],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'as-needed'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'prefer-arrow-callback': ['error', { 'allowNamedFunctions': false }],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
    },
  },
)
