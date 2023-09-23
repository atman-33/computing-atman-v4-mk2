import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const env = {
  PORT: process.env['PORT'],
  ATMAN_DB_URL: process.env['ATMAN_DB_URL'],
  JWT_EXPIRATION: process.env['JWT_EXPIRATION'],
  JWT_SECRET: process.env['JWT_SECRET']
};
