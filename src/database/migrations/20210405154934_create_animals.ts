import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('animals', (table) => {
    table.uuid('id').notNullable().unique().defaultTo(knex.raw('uuid_generate_v4()'))
    table.text('type').notNullable()
    table.text('name').nullable()
    table.integer('age').nullable()
    table.float('weight').nullable()
    table.float('height').nullable()
    table.boolean('vaccinated').notNullable()
    table.text('breed').nullable()
    table.text('comments').nullable()
    table.uuid('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE').notNullable()

    table.timestamp('created_at').defaultTo((new Date()).toUTCString())
    table.timestamp('updated_at').defaultTo(new Date().toUTCString())
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('animals');
}

