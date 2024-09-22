/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'brace-style': ['warn', '1tbs'],
    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': ['warn', 'always'],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-trailing-spaces': 'warn',
    'no-unexpected-multiline': 'error',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'object-shorthand': ['warn'],
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'space-before-function-paren': 0,
  },
}
