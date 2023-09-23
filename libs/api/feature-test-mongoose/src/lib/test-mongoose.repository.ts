import { AbstractRepository } from '@libs/api/mongoose/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestMongoose } from './models/test-mongoose.model';
import { TestMongooseDocument } from './models/test-mongoose.schema';

@Injectable()
export class TestMongooseRepository extends AbstractRepository<TestMongooseDocument> {
  protected readonly logger = new Logger(TestMongooseRepository.name);

  constructor(@InjectModel(TestMongoose.name) testMongooseModel: Model<TestMongooseDocument>) {
    super(testMongooseModel);
  }
}
