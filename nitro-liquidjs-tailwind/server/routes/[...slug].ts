import { renderTemplate } from '~/utils/liquidjs'

export default defineEventHandler(async (event) => {
  const data =
    event.context.slug === 'index'
      ? {
          tagline: 'It works! Nitro is amazing (also follow and subscribe)',
          mascots: [
            {
              name: 'Denise Ritchie',
              birthYear: -2000,
              organization: 'My random org',
            },
            {
              name: 'Petra Sihombing',
              birthYear: 1900,
              organization: 'Another org here',
            },
          ],
        }
      : {}

  return renderTemplate(event.context.templateKey, {
    pageTitle: 'Hello World!',
    ...data,
  })
})
