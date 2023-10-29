import { Injectable } from '@nestjs/common';
import { GetSampleMongooseTableArgs } from './dto/args/get-sample-mongoose-table-args.dto';
import { CreateSampleMongooseTableInput } from './dto/input/create-sample-mongoose-table-input.dto';
import { DeleteSampleMongooseTableInput } from './dto/input/delete-sample-mongoose-table-input.dto';
import { UpdateSampleMongooseTableInput } from './dto/input/update-sample-mongoose-table-input.dto';
import { SampleMongooseTableDocument } from './models/sample-mongoose-table.schema';
import { SampleMongooseTableRepository } from './sample-mongoose-table.repository';

@Injectable()
export class SampleMongooseTableService {
  constructor(private readonly SampleMongooseTableRepository: SampleMongooseTableRepository) {}

  async createSampleMongooseTable(createSampleMongooseTableData: CreateSampleMongooseTableInput) {
    const SampleMongooseTableDocument = await this.SampleMongooseTableRepository.create({
      ...createSampleMongooseTableData
    });

    return this.toModel(SampleMongooseTableDocument);
  }

  async updateSampleMongooseTable(updateSampleMongooseTableData: UpdateSampleMongooseTableInput) {
    const SampleMongooseTableDocument = await this.SampleMongooseTableRepository.findOneAndUpdate(
      { _id: updateSampleMongooseTableData._id },
      updateSampleMongooseTableData
    );
    return this.toModel(SampleMongooseTableDocument);
  }

  async deleteSampleMongooseTable(deleteSampleMongooseTableData: DeleteSampleMongooseTableInput) {
    return await this.SampleMongooseTableRepository.deleteOne({
      _id: deleteSampleMongooseTableData._id
    });
  }

  async getSampleMongooseTables() {
    const SampleMongooseTableDocument = await this.SampleMongooseTableRepository.find({});
    return SampleMongooseTableDocument.map((test) => this.toModel(test));
  }

  async getSampleMongooseTable(getSampleMongooseTableArgs: GetSampleMongooseTableArgs) {
    const SampleMongooseTableDocument = await this.SampleMongooseTableRepository.findOne({
      ...getSampleMongooseTableArgs
    });
    return this.toModel(SampleMongooseTableDocument);
  }

  private toModel(SampleMongooseTableDocument: SampleMongooseTableDocument) {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      _id: SampleMongooseTableDocument._id.toHexString(),
      ...SampleMongooseTableDocument
    };
  }
}
