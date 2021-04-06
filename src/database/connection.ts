import configs from '../../knexfile'
import knex from 'knex';
const environment = process.env.ENV || configs.development;

const connection = process.env.NODE_ENV === 'test' ? knex(configs.test) : knex(environment)

export default connection;

 