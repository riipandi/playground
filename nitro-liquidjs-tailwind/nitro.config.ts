import { resolve } from 'pathe'
import { env, isDevelopment, isProduction } from 'std-env'

/* https://nitro.unjs.io/config */
export default defineNitroConfig({
  appConfig: {
    baseURL: env.SITE_BASE_URL || 'http://localhost:3000',
    title: 'My Beautiful Website',
  },
  srcDir: 'server',
  preset: 'node-server',
  minify: isProduction,
  sourceMap: isDevelopment,
  serveStatic: 'node',
  errorHandler: '~/error',
  publicAssets: [{ dir: '../public' }],
  serverAssets: [{ baseName: 'views', dir: resolve('server/views') }],
  prerender: {
    autoSubfolderIndex: true,
    crawlLinks: true,
    failOnError: true,
    ignore: ['/404'],
    routes: ['/', '/welcome'],
  },
})
