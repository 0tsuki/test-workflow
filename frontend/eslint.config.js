export default {
  extends: ["eslint:recommended","plugin:react/recommended"],
  rules: {
    "no-console": "off",
  },
  ignorePatterns: ["node_modules/**", "dist/**", "build/**", "coverage/**"],
};
