import { ColumnType, Generated } from 'kysely'

export interface PetTable {
    id: Generated<number>
    owner_id: number
    name: string
    species: 'dog' | 'cat'
    // You can specify a different type for each operation (select, insert and
    // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
    // wrapper. Here we define a column `updated_at` that is selected as
    // a `Date`, can optionally be provided as a `string` in inserts and
    // can never be updated:
    created_at: ColumnType<Date, string | undefined, never>
    updated_at: ColumnType<Date, string | undefined, never>
}
