import devServer from '@hono/vite-dev-server'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'
import trpc from './trpc/vite-plugin'

export default defineConfig({
  plugins: [
    vike({}),
    devServer({
      entry: 'hono-entry.ts',
      exclude: [
        /^\/@.+$/,
        /.*\.(ts|tsx|vue)($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /^\/favicon\.ico$/,
        /.*\.(svg|png)($|\?)/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/,
      ],
      injectClientScript: false,
    }),
    inspect({ build: false, open: false }),
    react({}),
    trpc(),
  ],
  server: {
    port: 3000,
    strictPort: true,
    watch: { ignored: ['**/assets/**'] },
  },
  build: {
    target: 'ES2022',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024,
    reportCompressedSize: false,
  },
})
