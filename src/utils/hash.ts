import bcrypt from 'bcryptjs';

const makeHash = (value: string) => bcrypt.hash(value, 10)

export {
  makeHash
}