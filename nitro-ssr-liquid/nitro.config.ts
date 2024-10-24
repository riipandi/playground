import { resolve } from 'pathe'
import { env, isDevelopment, isProduction, provider } from 'std-env'
import type { AppConfig } from '~/types/config'

/* https://nitro.unjs.io/config */
export default defineNitroConfig({
  appConfig: {
    baseURL:
      provider === 'cloudflare_pages'
        ? env.CF_PAGES_URL
        : env.SITE_BASE_URL || 'http://localhost:3000',
    title: 'Beautiful Website',
  } as AppConfig,
  srcDir: 'server',
  preset: 'cloudflare-pages',
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
    routes: ['/', '/welcome'],
  },
})
