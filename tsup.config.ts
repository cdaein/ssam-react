import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: "esm",
  target: "esnext",
  dts: true,
  clean: true,
  treeshake: true,
});
