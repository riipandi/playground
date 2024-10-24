import type { H3Event } from 'h3'
import { isProduction } from 'std-env'

export function handleNoCache(event: H3Event): boolean {
  return !isProduction || event.node.req.url.includes('nocache')
}
