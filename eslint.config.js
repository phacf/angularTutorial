// @ts-check
const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const angular = require('angular-eslint')
const prettier = require('prettier')
const importPlugin = require('eslint-plugin-import')
const tsEslint = require('typescript-eslint')

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      import: importPlugin,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'import/order': [
        // Regra para organizar a ordem de importação
        'error',
        {
          groups: [
            'builtin', // Módulos nativos do Node.js, como 'fs' e 'path'
            'external', // Pacotes de terceiros instalados via npm
            'internal', // Alias e módulos internos do projeto
            ['parent', 'sibling', 'index'], // Relativos a arquivos do projeto
            'object', // Importações via objetos
            'type', // Importações de tipos (útil em TypeScript)
          ],
          'newlines-between': 'always', // Adiciona linha em branco entre grupos

          alphabetize: { order: 'asc', caseInsensitive: true }, // Ordena em ordem alfabética
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
)
