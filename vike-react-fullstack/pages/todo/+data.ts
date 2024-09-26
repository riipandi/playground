// https://vike.dev/data
import { db } from '../../database/db'
import { todoTable } from '../../database/schema'

export type Data = {
  todo: { id?: number; text: string }[]
}

export default async function data(): Promise<Data> {
  const todo = await db.select().from(todoTable).all()

  return { todo }
}
