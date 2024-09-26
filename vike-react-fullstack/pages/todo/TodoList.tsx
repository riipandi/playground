import { useState } from 'react'
import { trpc } from '../../trpc/client'
import type { Data } from './+data'

export function TodoList({ initialTodoItems }: { initialTodoItems: Data['todo'] }) {
  const [todoItems, setTodoItems] = useState(initialTodoItems)
  const [newTodo, setNewTodo] = useState('')

  return (
    <>
      <ul>
        {todoItems.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.text}</li>
        ))}
      </ul>
      <div>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault()

            // Optimistic UI update
            setTodoItems((prev) => [...prev, { text: newTodo }])
            try {
              await trpc.onNewTodo.mutate(newTodo)
              setNewTodo('')
            } catch (e) {
              console.error(e)
              // rollback
              setTodoItems((prev) => prev.slice(0, -1))
            }
          }}
        >
          <input
            type='text'
            className='border px-3 py-1'
            onChange={(ev) => setNewTodo(ev.target.value)}
            value={newTodo}
          />{' '}
          <button type='submit' className='border px-3 py-1'>
            Add to-do
          </button>
        </form>
      </div>
    </>
  )
}
