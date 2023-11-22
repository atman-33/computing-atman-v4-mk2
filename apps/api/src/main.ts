/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { env } from '@libs/shared/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true
  });

  const port = env.API_PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application playground is running on: http://localhost:${port}/api/graphql`);
}

bootstrap();
