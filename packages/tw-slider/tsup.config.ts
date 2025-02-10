import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/v1.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "@radix-ui/react-slider"],
  outDir: "dist",
  sourcemap: true,
  clean: true,
  injectStyle: false, // Don't inject styles
  loader: {
    // Add loader for CSS
    ".css": "css",
  },
  tsconfig: "./tsconfig.json",
});
