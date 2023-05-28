import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      icons: path.resolve(__dirname, "./src/assets/icons"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
});
