import { resolve } from 'pathe'
import { isDevelopment, isProduction } from 'std-env'

/* https://nitro.unjs.io/config */
export default defineNitroConfig({
  srcDir: 'server',
  preset: 'cloudflare-pages',
  appConfigFiles: ['~~/app.config'],
  output: { dir: resolve('.output') },
  minify: isProduction,
  sourceMap: isDevelopment,
  serveStatic: 'inline',
  errorHandler: '~/error',
  publicAssets: [{ dir: resolve('public') }],
  serverAssets: [{ baseName: 'views', dir: resolve('server/views') }],
  prerender: {
    autoSubfolderIndex: true,
    crawlLinks: true,
    failOnError: true,
    ignore: ['/404'],
    routes: ['/', '/welcome', '/ssr-jsx'],
  },
})
