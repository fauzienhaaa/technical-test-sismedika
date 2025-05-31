import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginCypress from "eslint-plugin-cypress";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["cypress/test/**/*.js", "cypress/support/**/*.js"],
    plugins: {
      cypress: eslintPluginCypress,
    },
    env: {
      "cypress/globals": true,
    },
    extends: ["plugin:cypress/recommended"],
    languageOptions: { globals: globals.browser },
  },
]);
