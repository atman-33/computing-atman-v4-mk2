import { ImageModule } from '@libs/api/feature-image';
import { SampleModule } from '@libs/api/feature-sample';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/api/graphql',
      autoSchemaFile: true
    }),
    ImageModule,
    SampleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
