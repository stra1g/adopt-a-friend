import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').notNullable().unique().defaultTo(knex.raw('uuid_generate_v4()'))
    table.text('name').notNullable()
    table.text('username').notNullable().unique()
    table.text('email').notNullable().unique()
    table.text('password').notNullable()
    table.text('address').notNullable()
    table.text('neighborhood').notNullable()
    table.text('telephone').nullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
};
