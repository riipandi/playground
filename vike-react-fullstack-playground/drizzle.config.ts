import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  driver: 'turso',
  schema: './database/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: 'libsql://localhost:8080?tls=0',
    authToken: undefined,
  },
})
