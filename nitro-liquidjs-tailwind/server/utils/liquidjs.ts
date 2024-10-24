// Reference: https://github.com/manniL/alexander-lichter-nitro-ejs

import { Liquid, type LiquidOptions } from 'liquidjs'
import { resolve } from 'pathe'
import { isProduction } from 'std-env'

// Storage key for view templates in Nitro
const VIEWS_STORAGE_KEY = 'assets:views'

// Templates that should skip caching
const SKIP_CACHE_TEMPLATES = ['index', 'blog'] as const
type SkipCacheTemplate = (typeof SKIP_CACHE_TEMPLATES)[number]

/**
 * Configuration for Liquid template engine
 */
const LIQUID_CONFIG: LiquidOptions = {
  root: [resolve('server/views')],
  cache: isProduction,
  extname: '.liquid',
  trimTagRight: true, // Improves whitespace handling
  strictVariables: true, // Throws error on undefined variables
  strictFilters: true, // Throws error on undefined filters
} as const

/**
 * Renders a Liquid template with provided data
 * @param templateKey - Template key/path to render
 * @param data - Data to pass to template
 * @returns Rendered HTML string
 */
export const renderTemplate = defineCachedFunction(
  async (templateKey: string, data?: Record<string, unknown>) => {
    const viewStorage = useStorage(VIEWS_STORAGE_KEY)
    const htmlContent = await viewStorage.getItem<string>(`${templateKey}.liquid`)

    if (!htmlContent) {
      throw createError({ status: 500, message: `Template ${templateKey} not found` })
    }

    const engine = new Liquid(LIQUID_CONFIG)
    return engine.parseAndRender(htmlContent, data)
  },
  {
    shouldBypassCache: (templateKey: string): boolean => {
      const shouldSkipCache = SKIP_CACHE_TEMPLATES.includes(
        templateKey.replace('pages:', '') as SkipCacheTemplate
      )
      const isBlogPost = /^pages:blog\/.+/.test(templateKey)
      return !isProduction || shouldSkipCache || isBlogPost
    },
    name: 'liquid-template',
    maxAge: 60 * 60 * 24 /* 24 hours */,
    swr: true,
  }
)
