import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@api": path.resolve(__dirname, "src/api"),
      "@layouts": path.resolve(__dirname, "src/layouts"),

    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting,
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
