// Reference: https://github.com/manniL/alexander-lichter-nitro-ejs

import { Liquid, type LiquidOptions } from 'liquidjs'
import { resolve } from 'pathe'
import { isProduction } from 'std-env'

// Storage key for view templates in Nitro
const TEMPLATE_STORAGE_KEY = 'assets:views'

// Templates that should skip caching
const SKIP_CACHE_TEMPLATES = ['index', 'blog'] as const
type SkipCacheTemplate = (typeof SKIP_CACHE_TEMPLATES)[number]

/**
 * Configuration for Liquid template engine
 */
const LIQUID_ENGINE_CONFIG: LiquidOptions = {
  root: [resolve('server/views')],
  cache: isProduction,
  extname: '.liquid',
  trimTagRight: true,
  strictVariables: true,
  strictFilters: true,
} as const

/**
 * Renders a Liquid template with caching support
 * @param templatePath - Template path to render
 * @param context - Template context data
 * @returns Rendered HTML string
 */
export const renderCachedTemplate = defineCachedFunction(
  async (templatePath: string, context?: Record<string, unknown>) => {
    return renderTemplate(templatePath, context)
  },
  {
    shouldBypassCache: (templatePath: string): boolean => {
      const shouldSkipCache = SKIP_CACHE_TEMPLATES.includes(
        templatePath.replace('pages:', '') as SkipCacheTemplate
      )
      const isBlogPost = /^pages:blog\/.+/.test(templatePath)
      return !isProduction || shouldSkipCache || isBlogPost
    },
    name: 'liquid-template',
    maxAge: 60 * 60 * 24,
    swr: true,
  }
)

/**
 * Renders a Liquid template from storage
 * @param templatePath - Template path to render
 * @param context - Template context data
 * @returns Rendered HTML string
 */
export async function renderTemplate(templatePath: string, context?: Record<string, unknown>) {
  const templateStorage = useStorage(TEMPLATE_STORAGE_KEY)
  const templateContent = await templateStorage.getItem<string>(`${templatePath}.liquid`)

  if (!templateContent) {
    throw createError({
      status: 404,
      message: `Template not found: ${templatePath}`,
    })
  }

  const liquidEngine = new Liquid(LIQUID_ENGINE_CONFIG)
  return liquidEngine.parseAndRender(templateContent, context)
}
