import { Injectable } from '@nestjs/common';
import { GetTestMongooseArgs } from './dto/args/get-test-mongoose-args.dto';
import { CreateTestMongooseInput } from './dto/input/create-test-mongoose-input.dto';
import { DeleteTestMongooseInput } from './dto/input/delete-test-mongoose-input.dto';
import { UpdateTestMongooseInput } from './dto/input/update-test-mongoose-input.dto';
import { TestMongooseDocument } from './models/test-mongoose.schema';
import { TestMongooseRepository } from './test-mongoose.repository';

@Injectable()
export class TestMongooseService {
  constructor(private readonly testMongooseRepository: TestMongooseRepository) {}

  async createTestMongoose(createTestMongooseData: CreateTestMongooseInput) {
    const testMongooseDocument = await this.testMongooseRepository.create({
      ...createTestMongooseData
    });

    return this.toModel(testMongooseDocument);
  }

  async updateTestMongoose(updateTestMongooseData: UpdateTestMongooseInput) {
    const testMongooseDocument = await this.testMongooseRepository.findOneAndUpdate(
      { _id: updateTestMongooseData._id },
      updateTestMongooseData
    );
    return this.toModel(testMongooseDocument);
  }

  async deleteTestMongoose(deleteTestMongooseData: DeleteTestMongooseInput) {
    return await this.testMongooseRepository.deleteOne({ _id: deleteTestMongooseData._id });
  }

  async getTestMongooses() {
    const testMongooseDocument = await this.testMongooseRepository.find({});
    return testMongooseDocument.map((test) => this.toModel(test));
  }

  async getTestMongoose(getTestMongooseArgs: GetTestMongooseArgs) {
    const testMongooseDocument = await this.testMongooseRepository.findOne({
      ...getTestMongooseArgs
    });
    return this.toModel(testMongooseDocument);
  }

  private toModel(testMongooseDocument: TestMongooseDocument) {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      _id: testMongooseDocument._id.toHexString(),
      ...testMongooseDocument
    };
  }
}
