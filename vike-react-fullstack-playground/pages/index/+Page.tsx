import { useStore } from '@nanostores/react'
import { uiStore } from '../../libraries/stores/ui.store'
import { Counter } from './Counter'

export default function Page() {
  // FIXME hydration mismatch
  const store = useStore(uiStore, { keys: ['counter'] })

  return (
    <>
      <h1 className='pb-4 font-bold text-3xl'>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter counter={store.counter} />
        </li>
      </ul>
    </>
  )
}
