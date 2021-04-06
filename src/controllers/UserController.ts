import { Request, Response } from 'express';

import { makeHash } from '../utils/hash'
import knex from '../database/connection';

class UserController {
  async create(request: Request, response: Response){
    const { 
      name, 
      username, 
      email, 
      password, 
      address, 
      neighborhood, 
      telephone 
    } = request.body

    const passwordHashed = await makeHash(password);

    await knex('users').insert({
      name,
      username,
      email,
      password: passwordHashed,
      address,
      neighborhood, 
      telephone
    })

    return response.status(201).json({message: 'user created'})

  };
};

export default new UserController
