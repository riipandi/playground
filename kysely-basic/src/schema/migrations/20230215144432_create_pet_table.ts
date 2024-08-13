import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable('pet')
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('owner_id', 'integer', (col) =>
            col.references('person.id').onDelete('cascade').notNull()
        )
        .addColumn('name', 'varchar', (col) => col.notNull().unique())
        .addColumn('species', 'varchar', (col) => col.notNull())
        .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .execute()

    await db.schema.createIndex('pet_owner_id_index').on('pet').column('owner_id').execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('pet').execute()
}
