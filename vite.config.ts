import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === "development" ? "/" : "/my-blog/", // ✅ 로컬은 "/", GitHub Pages는 "/my-blog/"
  esbuild: {
    legalComments: "none", // 불필요한 주석 제거
  },
  build: {
    minify: "esbuild", // vite v5 이상부터 esbuild로 변경
    terserOptions: {
      compress: {
        drop_console: true, // 콘솔 로그 제거
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
}));
