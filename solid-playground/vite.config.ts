import { resolve } from "node:path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    // Solid DevTools (https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme)
    // devtools(),
    solidPlugin(),
  ],
  envPrefix: ["VITE_"],
  clearScreen: false,
  server: {
    port: 3000,
    strictPort: true,
    watch: {
      ignored: ["**/dist/**"],
    },
  },
  resolve: {
    alias: [{ find: "#", replacement: resolve(__dirname, "src") }],
  },
  // esbuild: {
  //   supported: {
  //     "top-level-await": true, // browsers can handle top-level-await features
  //   },
  // },
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 1024,
    reportCompressedSize: false,
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: { app: resolve(__dirname, "index.html") },
      output: {
        // Output with hash in filename
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },
});
