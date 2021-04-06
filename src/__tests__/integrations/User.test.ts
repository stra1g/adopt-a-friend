import request from 'supertest';
import app from '../../app';
import { Knex } from "knex";
import connection from '../../database/connection'
import config from '../../../knexfile'
import knex from 'knex'
const connect = knex(config.test)
import path from 'path'

describe('Users', () => {
  beforeEach(async (done) => {

    await connection.migrate.latest({
      directory: path.join(__dirname, '..', '..', 'database', 'migrations'),
      extension: 'ts',
      tableName: 'knex_migrations',
    })
    done()
  })
  
  it('should be able to create a new user', async (done) => {
    const response = await request(app).post('/account/create').send({
      name: "Luis Vitor",
      username: 'stra1g09',
      email: 'luis@luis.com',
      password: 'abc123abc',
      address: 'Avenue Random, 238',
      neighborhood: 'Any neighborhood',
      telephone: '+55(43)99999-9999'
    });

    expect(response.status).toBe(201)
    done()
  })

  afterEach(async (done) => {
    await connection('users').del()
    await connection.destroy()
    done()
  })
})

