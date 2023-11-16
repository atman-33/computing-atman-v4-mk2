import { AbstractRepository } from '@libs/api/mongoose/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SampleUserDocument } from './models/sample-todo.schema';
import { SampleUser } from './models/sample-user.model';

@Injectable()
export class SampleUsersRepository extends AbstractRepository<SampleUserDocument> {
  protected readonly logger = new Logger(SampleUsersRepository.name);

  constructor(
    @InjectModel(SampleUser.name)
    SampleUserModel: Model<SampleUserDocument>
  ) {
    super(SampleUserModel);
  }
}
