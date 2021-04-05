import bcrypt from 'bcryptjs';

const make = (value: string) => bcrypt.hash(value, 10)

export {
  make
}