import { defineConfig } from "vite";
import { isProduction } from "std-env";
import { resolve } from "pathe";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    emptyOutDir: true,
    minify: isProduction,
    chunkSizeWarningLimit: 1024 * 3,
    reportCompressedSize: false,
    rollupOptions: { input: resolve("client/main.tsx") },
    outDir: resolve(".output/client"),
  },
});
