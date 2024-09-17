import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: [
      {'react-hooks': reactHooks},
      {'react-refresh': reactRefresh},
      'react',                // Suporte a React
      '@typescript-eslint'   // Suporte a TypeScript
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'warn', // Aviso para variáveis não usadas
      '@typescript-eslint/no-unused-vars': ['warn'], // Aviso para variáveis TypeScript não usadas
      "quotes": ["error", "double"],
      "indent": ["error", 4]
    },
  },
)
