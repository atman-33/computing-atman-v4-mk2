import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestMongoose } from './models/test-mongoose.model';
import { TestMongooseSchema } from './models/test-mongoose.schema';
import { TestMongooseRepository } from './test-mongoose.repository';
import { TestMongooseResolver } from './test-mongoose.resolver';
import { TestMongooseService } from './test-mongoose.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TestMongoose.name,
        schema: TestMongooseSchema
      }
    ])
  ],
  providers: [TestMongooseResolver, TestMongooseService, TestMongooseRepository]
})
export class TestMongooseModule {}
