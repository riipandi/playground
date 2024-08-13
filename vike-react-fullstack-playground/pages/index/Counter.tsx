import { type UiStore, increase } from '../../libraries/stores/ui.store'

export function Counter({ counter }: { counter: UiStore['counter'] }) {
  return (
    <button
      type='button'
      className='inline-block rounded border border-black bg-gray-200 px-2 py-1 font-medium text-xs uppercase leading-normal'
      onClick={increase}
    >
      Counter {counter}
    </button>
  )
}
