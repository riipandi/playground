import { db, migrator } from './database'

async function runMigration(action: 'migrate' | 'rollback') {
    const { error, results } =
        action == 'rollback' ? await migrator.migrateDown() : await migrator.migrateToLatest()

    results?.forEach((it) => {
        if (it.status === 'Success') {
            console.log(`migration "${it.migrationName}" was executed successfully`)
        } else if (it.status === 'Error') {
            console.error(`failed to execute migration "${it.migrationName}"`)
        }
    })

    if (error) {
        console.error('failed to migrate')
        console.error(error)
        process.exit(1)
    }

    await db.destroy()
}

switch (process.argv[2]) {
    case 'migrate':
        console.info('Running database migration...')
        runMigration('migrate')
        break
    case 'rollback':
        console.info('Rolling back migration...')
        runMigration('rollback')
        break
    case 'seed':
        console.info('Not yet implemented...')
        break
    default:
        console.warn('Invalid argument provided!')
        break
}
