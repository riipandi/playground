import { db } from './schema/database'

async function demo() {
    const { id } = await db
        .insertInto('person')
        .values({ first_name: 'Jennifer', last_name: 'Lopez', gender: 'female' })
        .returning('id')
        .executeTakeFirstOrThrow()

    await db.insertInto('pet').values({ name: 'Catto', species: 'cat', owner_id: id }).execute()

    const person = await db
        .selectFrom('person')
        .innerJoin('pet', 'pet.owner_id', 'person.id')
        .select(['first_name', 'pet.name as pet_name'])
        .where('person.id', '=', id)
        .executeTakeFirst()

    if (person) {
        console.info('RESULT', person.pet_name)
    }
}

demo()
