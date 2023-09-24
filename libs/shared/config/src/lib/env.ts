import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const env = {
  PORT: process.env['PORT'],
  NEXT_PUBLIC_IS_DEV: process.env['NEXT_PUBLIC_IS_DEV'],
  API_PORT: process.env['API_PORT'],
  NEXT_PUBLIC_WEB_GQL_URL: process.env['NEXT_PUBLIC_WEB_GQL_URL'],
  DB_URL: process.env['DB_URL'],
  JWT_EXPIRATION: process.env['JWT_EXPIRATION'],
  JWT_SECRET: process.env['JWT_SECRET']
};
