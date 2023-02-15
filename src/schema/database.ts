import 'dotenv/config'
import { Kysely, PostgresDialect, FileMigrationProvider, Migrator } from 'kysely'
import { promises as fs } from 'fs-extra'
import { Pool } from 'pg'
import path, { join } from 'path'

import { PetTable, PersonTable } from './tables'

interface Database {
    person: PersonTable
    pet: PetTable
}

// Database migrations folder
const migrationFolder = join(__dirname, 'migrations')

// You'd create one of these when you start your app.
export const db = new Kysely<Database>({
    // Use MysqlDialect for MySQL and SqliteDialect for SQLite.
    dialect: new PostgresDialect({
        pool: new Pool({ connectionString: process.env.DATABASE_URL }),
    }),
})

export const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({ fs, path, migrationFolder }),
    migrationTableName: '_migration',
    migrationLockTableName: '_migration_lock',
    migrationTableSchema: 'public',
})
