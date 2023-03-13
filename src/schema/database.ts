import 'dotenv/config'
import { Kysely, PostgresDialect, FileMigrationProvider, Migrator } from 'kysely'
import { promises as fs } from 'fs-extra'
import { Pool } from 'pg'
import path, { join } from 'path'

import { PetTable, PersonTable } from './tables'
import { NeonDialect } from 'kysely-neon'

export interface Database {
    person: PersonTable
    pet: PetTable
}

enum DatabaseDialect {
    Postgres = 'postgres',
    Neon = 'neon',
}

// Database migrations folder and selected dialect
const migrationFolder = join(__dirname, 'migrations')
const selectedDialect = process.env.DATABASE_DIALECT as DatabaseDialect

const dbDialect = (dialect: DatabaseDialect) => {
    return dialect === DatabaseDialect.Neon
        ? new NeonDialect({
              connectionString: process.env.DATABASE_URL!!,
          })
        : new PostgresDialect({
              pool: new Pool({
                  connectionString: process.env.DATABASE_URL!!,
              }),
          })
}

// You'd create one of these when you start your app.
export const db = new Kysely<Database>({
    dialect: dbDialect(selectedDialect),
})

export const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({ fs, path, migrationFolder }),
    migrationTableName: '_migration',
    migrationLockTableName: '_migration_lock',
    migrationTableSchema: 'public',
})
