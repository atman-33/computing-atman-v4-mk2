import { AbstractRepository } from '@libs/api/mongoose/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SampleUser } from './models/sample-user.model';
import { SampleUserDocument } from './models/sample-user.schema';

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
