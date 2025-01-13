import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: ["prettier", "react"],
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      "plugin:prettier/recommended",
      configPrettier,
    ],
    rules: {
      "prettier/prettier": ["error"],
    },
  },
];
