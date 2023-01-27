import { fileURLToPath, URL } from "node:url";
import typescript2 from "rollup-plugin-typescript2";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      // include: ["src/components/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ["vite.config.ts"],
      },
    }),
  ],
  build: {
    cssCodeSplit: false,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/VMedia.ts"),
      formats: ["es", "cjs"],
      name: "VMedia",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
