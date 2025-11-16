import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import md from "vite-plugin-markdown-preview";

export default defineConfig({
  plugins: [
    react(),
    md()
  ]
});
