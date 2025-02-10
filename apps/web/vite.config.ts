import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
      open: true,
      template: "treemap",
      sourcemap: true,
    }) as any,
  ],
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/[name]-[hash].js",
        manualChunks: {
          "react-core": ["react", "react-dom"],
          "tailwind-components": ["@ds/tw-button", "@ds/tw-dialog"],
          "mui-components": ["@ds/mui-dialog"],
          "tailwind-styles": [
            "@ds/tw-button/dist/index.css",
            "@ds/tw-dialog/dist/index.css",
          ],
        },
      },
    },
  },
});
