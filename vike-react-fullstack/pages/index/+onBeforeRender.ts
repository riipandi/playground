import type { OnBeforeRenderAsync } from 'vike/types'

// import { useStore } from '@nanostores/react'
// import { uiStore } from '../../libraries/stores/ui.store'

const onBeforeRender: OnBeforeRenderAsync = async (
  _pageContext
): ReturnType<OnBeforeRenderAsync> => {
  // const store = useStore(uiStore, { keys: ['counter'] })
  // console.debug('DEBUG', store)

  return {
    pageContext: {},
  }
}

export { onBeforeRender }
