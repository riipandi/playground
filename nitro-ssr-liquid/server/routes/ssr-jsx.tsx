import { h, renderSSR } from 'nano-jsx'
import type { AppConfig } from '~/types/config'

export default defineEventHandler((event) => {
  const appConfig = useAppConfig(event) as AppConfig

  const html = renderSSR(() => (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={appConfig.description} />
        <title>{appConfig.title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body class="min-h-screen antialiased">
        <h1>{appConfig.title} + nano-jsx works!</h1>
      </body>
    </html>
  ))

  return html
})
