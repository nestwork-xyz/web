import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  endOfLine: "lf",
  ignorePatterns: ["plop-templates"],
  printWidth: 80,
});
