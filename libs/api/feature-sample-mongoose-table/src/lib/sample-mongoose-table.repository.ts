import { AbstractRepository } from '@libs/api/mongoose/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SampleMongooseTable } from './models/sample-mongoose-table.model';
import { SampleMongooseTableDocument } from './models/sample-mongoose-table.schema';

@Injectable()
export class SampleMongooseTableRepository extends AbstractRepository<SampleMongooseTableDocument> {
  protected readonly logger = new Logger(SampleMongooseTableRepository.name);

  constructor(
    @InjectModel(SampleMongooseTable.name)
    SampleMongooseTableModel: Model<SampleMongooseTableDocument>
  ) {
    super(SampleMongooseTableModel);
  }
}
