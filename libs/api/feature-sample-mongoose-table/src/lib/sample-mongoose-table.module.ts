import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleMongooseTable } from './models/sample-mongoose-table.model';
import { SampleMongooseTableSchema } from './models/sample-mongoose-table.schema';
import { SampleMongooseTableRepository } from './sample-mongoose-table.repository';
import { SampleMongooseTableResolver } from './sample-mongoose-table.resolver';
import { SampleMongooseTableService } from './sample-mongoose-table.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SampleMongooseTable.name,
        schema: SampleMongooseTableSchema
      }
    ])
  ],
  providers: [
    SampleMongooseTableResolver,
    SampleMongooseTableService,
    SampleMongooseTableRepository
  ]
})
export class SampleMongooseTableModule {}
