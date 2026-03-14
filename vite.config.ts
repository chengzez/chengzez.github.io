import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        curriculum: new URL("./curriculum.html", import.meta.url).pathname,
        faculty: new URL("./faculty.html", import.meta.url).pathname,
      },
    },
  },
});
