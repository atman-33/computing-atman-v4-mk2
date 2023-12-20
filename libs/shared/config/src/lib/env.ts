import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const env = {
  PORT: process.env['PORT'],
  API_PORT: process.env['API_PORT'],
  NEXT_PUBLIC_IS_DEV: process.env['NEXT_PUBLIC_IS_DEV'],
  NEXT_PUBLIC_API_ENDPOINT: process.env['NEXT_PUBLIC_API_ENDPOINT'],
  NEXT_PUBLIC_API_GQL_URL: process.env['NEXT_PUBLIC_API_GQL_URL'],
  NEXT_PUBLIC_GISCUS_REPO: process.env['NEXT_PUBLIC_GISCUS_REPO'],
  NEXT_PUBLIC_GISCUS_REPOSITORY_ID: process.env['NEXT_PUBLIC_GISCUS_REPOSITORY_ID'],
  NEXT_PUBLIC_GISCUS_CATEGORY: process.env['NEXT_PUBLIC_GISCUS_CATEGORY'],
  NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env['NEXT_PUBLIC_GISCUS_CATEGORY_ID'],
  PRODUCTION_ORIGIN: process.env['PRODUCTION_ORIGIN'],
  DB_URL: process.env['DB_URL'],
  JWT_EXPIRATION: process.env['JWT_EXPIRATION'] as string,
  JWT_SECRET: process.env['JWT_SECRET']
};
