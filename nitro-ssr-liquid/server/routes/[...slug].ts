import type { AppConfig } from '~/types/config'

type Feature = {
  name: string
  description: string
  highlight: string
}

export default defineEventHandler(async (event) => {
  const appConfig = useAppConfig(event) as AppConfig
  const features = await $fetch<Feature[]>('/api/features')
  const data = event.context.slug === 'index' ? { features } : {}

  return renderCachedTemplate(event.context.templateKey, {
    pageTitle: appConfig.title,
    pageDescription: appConfig.description,
    ...data,
  })
})
