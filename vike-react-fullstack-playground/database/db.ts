import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

import * as schema from './schema'

const client = createClient({
  url: 'libsql://localhost:8080?tls=0',
  authToken: undefined,
})

export const db = drizzle(client, { schema })
