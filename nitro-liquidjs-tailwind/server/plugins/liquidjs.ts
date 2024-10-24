// TODO - Other index handling, sanitize path
export default defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    const slug = getRouterParam(event, 'slug') || 'index'
    const key = `pages:${slug.replaceAll('/', ':')}`
    event.context.slug = slug
    event.context.templateKey = key
  })
})

declare module 'h3' {
  interface H3EventContext {
    slug?: string
    templateKey?: string
  }
}
