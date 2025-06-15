import globals from "globals";
import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import queryPlugin from "@tanstack/eslint-plugin-query";

/** @type {import('eslint').Linter.Config[]}*/

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
        ReactDOM: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      query: queryPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...queryPlugin.configs.recommended,
      // ESLint recommended rules
      //   "no-unused-vars": "warn",
      //   "no-undef": "error",
      //   "no-console": "warn",
      // Add more rules as needed
      "react/np-unescaped-entities": "off",
      "react/prop/types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettier,
];
