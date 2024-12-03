import { resolve } from 'pathe'
import { env, isDevelopment, isProduction, provider } from 'std-env'
import type { AppConfig } from '~/types/config'

/* https://nitro.unjs.io/config */
export default defineNitroConfig({
  srcDir: 'server',
  preset: 'cloudflare-pages',
  minify: isProduction,
  sourceMap: isDevelopment,
  compatibilityDate: '2024-11-02',
  errorHandler: '~/error',

  output: { dir: resolve('.output') },
  publicAssets: [{ dir: resolve('public') }],

  prerender: {
    autoSubfolderIndex: true,
    crawlLinks: true,
    failOnError: true,
    routes: ['/'],
  },

  appConfig: {
    baseURL: provider === 'cloudflare_pages' ? env.CF_PAGES_URL : 'http://localhost:3001',
    title: 'Nitro Application',
    description: 'Build fast and modern web applications with Nitro',
  } as AppConfig,
})
