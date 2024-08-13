import { persistentMap } from '@nanostores/persistent'

type UiStore = {
  counter: number
}

// Default values for the UiStore
const defaultStoreValue: UiStore = {
  counter: 0,
}

/**
 * Configures a persistent key-value map store for the application's UI state.
 * The store is persisted to the browser's localStorage, using the 'ui:' prefix
 * for the keys. The store values are encoded and decoded using JSON.stringify
 * and JSON.parse, respectively.
 *
 * Using key-value map store. It will keep each key in separated localStorage key.
 * You can switch localStorage to any other storage for all used stores.
 * @ref: https://github.com/nanostores/persistent#persistent-engines
 */
const uiStore = persistentMap<UiStore>('ui:', defaultStoreValue, {
  encode: JSON.stringify,
  decode: JSON.parse,
})

// Increases the counter value in the UI store by 1.
function increase() {
  const { counter } = uiStore.get()
  uiStore.setKey('counter', counter + 1)
}

export { uiStore, increase }
export type { UiStore }
