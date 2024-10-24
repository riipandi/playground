export default defineCachedEventHandler(
  async (event) => {
    const appConfig = useAppConfig(event) as { baseURL: string; title: string }

    setResponseHeader(event, 'Content-Type', 'text/plain')

    return send(event, `User-Agent: *\nAllow: /\nSitemap: ${appConfig.baseURL}/sitemap.xml`)
  },
  {
    shouldBypassCache: (e) => handleNoCache(e),
    maxAge: 60 * 60 * 12 * 30 /* 1 month */,
  }
)
