import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Add browser globals here
        // Add more globals if needed
      },
      parserOptions: {
        ecmaVersion: `latest`,
        sourceType: `module`,
      },
    },
  },
  pluginJs.configs.recommended, // This loads the recommended rules from eslint-plugin-js
  
  {
    "extends": [
      "eslint:recommended"
    ],
    "env": {
      "browser": true,
      "node": true,
      "es2021": true,
      "jest": true
    },
    "rules": {
      "array-bracket-spacing": [2, "always"],
      "no-const-assign": 2,
      "no-var": "error",
      "indent": [2, 2],
      "quotes": [2, "backtick"],
      "eqeqeq": "error"
    },
  },
];