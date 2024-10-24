import { resolve } from 'pathe'
import { isDevelopment, isProduction } from 'std-env'

/* https://nitro.unjs.io/config */
export default defineNitroConfig({
  srcDir: 'server',
  preset: 'node-server',
  minify: isProduction,
  sourceMap: isDevelopment,
  serveStatic: 'node',
  errorHandler: '~/error',
  serverAssets: [{ baseName: 'views', dir: resolve('server/views') }],
  prerender: {
    autoSubfolderIndex: true,
    crawlLinks: true,
    failOnError: true,
    routes: ['/', '/about'],
  },
})
