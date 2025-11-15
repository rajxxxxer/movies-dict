// eslint.config.mjs
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  // Next.js recommended rules
  nextCoreWebVitals,

  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
    ignores: [".next/", "node_modules/", "out/"],
  },
];
