export default defineEventHandler(async (event) => {
  const data =
    event.context.slug === 'index'
      ? {
          tagline: 'Build fast and modern web applications with Nitro, LiquidJS, and TailwindCSS',
          features: [
            {
              name: 'Nitro Engine',
              description: 'Universal JavaScript/TypeScript server runtime with powerful DX',
              highlight: 'Lightning Fast',
            },
            {
              name: 'LiquidJS Templates',
              description: 'Safe, fast and ExpressJS-like template engine for Node.js',
              highlight: 'Dynamic & Flexible',
            },
            {
              name: 'TailwindCSS',
              description: 'Utility-first CSS framework for rapid UI development',
              highlight: 'Modern Styling',
            },
          ],
        }
      : {}

  return renderCachedTemplate(event.context.templateKey, {
    pageTitle: 'Modern Web Stack',
    ...data,
  })
})
