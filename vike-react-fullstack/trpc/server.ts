import { initTRPC } from '@trpc/server'
import { db } from '../database/db'
import { todoTable } from '../database/schema'

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create()

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  demo: publicProcedure.query(async () => {
    return { demo: true }
  }),
  onNewTodo: publicProcedure
    .input((value): string => {
      if (typeof value === 'string') {
        return value
      }
      throw new Error('Input is not a string')
    })
    .mutation(async (opts) => {
      await db.insert(todoTable).values({ text: opts.input })
    }),
})

export type AppRouter = typeof appRouter
