export default {

  development: {
    client: 'pg',
    connection: {
      database: 'adopt_a_friend',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
      extension: 'ts'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
