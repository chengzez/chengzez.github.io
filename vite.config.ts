import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        curriculum: resolve(__dirname, "curriculum.html"),
        faculty: resolve(__dirname, "faculty.html"),
      },
    },
  },
});
