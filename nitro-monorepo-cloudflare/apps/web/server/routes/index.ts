import type { AppConfig } from '~/types/config'
import pkg from '~~/package.json' assert { type: 'json' }

export default eventHandler((event) => {
  const appConfig = useAppConfig(event) as AppConfig

  return `<h1>${appConfig.title} --> ${pkg.name}</h1>
<p>Get started by editing the <code>server/routes/index.ts</code> file.</p>
<p>Learn more from <a href="https://nitro.unjs.io" target="_blank">Nitro Documentation</a></p>
`
})
