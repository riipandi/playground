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
  typescript: {
    generateTsConfig: true,
    tsConfig: {
      compilerOptions: {
        jsx: 'preserve',
        jsxFactory: 'React.createElement',
        jsxFragmentFactory: 'React.Fragment',
        noEmit: true,
        strict: false,
        skipLibCheck: true,
        verbatimModuleSyntax: true,
        tsBuildInfoFile: '../../node_modules/.tsbuildinfo',
      },
    },
  },
})
