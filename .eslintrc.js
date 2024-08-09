// module.exports = {
//   // https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser
//   parser: '@typescript-eslint/parser',

//   // https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
//   parserOptions: {
//     ecmaVersion: 2017,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },

//   // https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings
//   settings: {
//     react: {
//       version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
//     },
//   },

//   // https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
//   extends: [
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:import/recommended',
//     'plugin:import/typescript', // Needed for TS support
//     'plugin:@typescript-eslint/recommended',

//     // PRETTIER
//     // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//     'plugin:prettier/recommended',
//   ],

//   // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
//   // https://eslint.org/docs/user-guide/configuring/rules
//   rules: {
//     'no-shadow': 'off', // Need to be turned off for @typescript-eslint/no-shadow to work
//     'no-useless-concat': 'warn', // Prefer using template literals instead of string concat
//     'react/prop-types': 'off', // In Typescript redundant
//     'react/display-name': 'off', // Do not require a displayName property for components. It complicates the use of simple inline components (like in some render functions: `render: () => {...my inline component...}`)
//     'import/no-extraneous-dependencies': 'error', // Forbids the import of external modules that are not declared in package dependencies
//     'import/export': 'off', // Prevents error when re-exporting nothing with `export * from './Foo'` (however this is useful to have for exports yet to be made)
//     'import/prefer-default-export': 'off', // Do not prefer default imports/exports

//     '@typescript-eslint/no-unused-vars': [
//       'warn',
//       {
//         args: 'after-used', // Allow unused positional arguments that occur before the last used argument (https://eslint.org/docs/rules/no-unused-vars#args)
//         ignoreRestSiblings: true, // Allow unused rest operator siblings (https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings)
//       },
//     ],
//     '@typescript-eslint/explicit-module-boundary-types': 'off', // Allows simple functional React components
//     '@typescript-eslint/no-shadow': 'error', // Forbids to declare already declared variable
//     '@typescript-eslint/no-non-null-assertion': 'off', // Allows to use non-null assertions (!), in many situations TS can't narrow types correctly.
//     '@typescript-eslint/no-inferrable-types': 'off', // Allow types even in situations where TS can infere them from the value
//     '@typescript-eslint/no-explicit-any': 'off', // Allow any type
//     'import/no-unresolved': [
//       'error',
//       {
//         ignore: [
//           '^components/?',
//           '^constants/?',
//           '^containers/?',
//           '^ducks/?',
//           '^helpers/?',
//           '^images/?',
//           '^store/?',
//           '^sagas/?',
//           '^styles/?',
//         ], // Allow imports of files from these folders without specifying the extension
//       },
//     ],
//     // Enter your project specific rules below (do not override those above)
//   },
// };

//Basic rules:
// {
//   "env": {
//     "browser": true,
//     "es2021": true,
//     "node": true
//   },
//   "extends": ["eslint:recommended"],
//   "parserOptions": {
//     "ecmaVersion": 12,
//     "sourceType": "module"
//   },
//   "rules": {
//     "indent": ["error", 2],
//     "quotes": ["error", "single"],
//     "semi": ["error", "always"]
//   }
// }
