import { env, provider } from 'std-env'
import type { AppConfig } from '~/types/config'

export default {
  baseURL:
    provider === 'cloudflare_pages'
      ? env.CF_PAGES_URL
      : env.SITE_BASE_URL || 'http://localhost:3000',
  title: 'Beautiful Website',
  description: 'Build fast and modern web applications with Nitro, LiquidJS, and TailwindCSS',
} satisfies AppConfig
