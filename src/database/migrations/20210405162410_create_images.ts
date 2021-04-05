import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('images', table => {
    table.uuid('id').notNullable().unique().defaultTo(knex.raw('uuid_generate_v4()'))
    table.text('path').notNullable()
    table.uuid('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE').nullable()
    table.uuid('animal_id').references('id').inTable('animals').onUpdate('CASCADE').onDelete('CASCADE').nullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('images');
}

