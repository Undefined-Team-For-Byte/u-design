/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  },
  plugins: [vue()],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "U_Design",
      fileName: "u-design",
      formats: ["es", "umd", "iife", "cjs"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
