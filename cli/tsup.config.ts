import { defineConfig } from "tsup";

const packageJson = require("./package.json");

export default defineConfig({
  entry: ["./src/index.ts"], // your CLI entry
  outDir: "dist",
  format: ["cjs"], // output CommonJS
  target: "node20", // or node18
  clean: true,
  bundle: true, // bundle your source
  external: Object.keys(packageJson.devDependencies).filter(
    (packageName: string) => packageName !== "dotenv",
  ), // exclude dependencies
  banner: {
    js: "#!/usr/bin/env node",
  },
});

// [
//   "dotenv",
//   "nodemon",
//   "ts-node",
//   "typescript",
//   "tsup",
//   "prettier",
//   // add other deps you don’t want bundled
// ],
