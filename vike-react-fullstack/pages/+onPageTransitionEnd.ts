import type { OnPageTransitionEndAsync } from 'vike/types'

export const onPageTransitionEnd: OnPageTransitionEndAsync = async () => {
  console.info('Page transition end')
  document.querySelector('body')?.classList.remove('page-is-transitioning')
}
