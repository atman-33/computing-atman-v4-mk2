import { Injectable } from '@nestjs/common';
import { GetSampleUserArgs } from './dto/args/get-sample-user-args.dto';
import { CreateSampleUserInput } from './dto/input/create-sample-user-input.dto';
import { DeleteSampleUserInput } from './dto/input/delete-sample-user-input.dto';
import { UpdateSampleUserInput } from './dto/input/update-sample-todo-input.dto';
import { SampleUserDocument } from './models/sample-user.schema';
import { SampleUsersRepository } from './sample-users.repository';

@Injectable()
export class SampleUsersService {
  constructor(private readonly SampleUserRepository: SampleUsersRepository) {}

  async createSampleUser(createSampleUserData: CreateSampleUserInput) {
    const SampleUserDocument = await this.SampleUserRepository.create({
      ...createSampleUserData
    });

    return this.toModel(SampleUserDocument);
  }

  async updateSampleUser(updateSampleUserData: UpdateSampleUserInput) {
    const SampleUserDocument = await this.SampleUserRepository.findOneAndUpdate(
      { _id: updateSampleUserData._id },
      updateSampleUserData
    );
    return this.toModel(SampleUserDocument);
  }

  async deleteSampleUser(deleteSampleUserData: DeleteSampleUserInput) {
    return await this.SampleUserRepository.deleteOne({
      _id: deleteSampleUserData._id
    });
  }

  async getSampleUsers() {
    const SampleUserDocument = await this.SampleUserRepository.find({});
    return SampleUserDocument.map((todo) => this.toModel(todo));
  }

  async getSampleUser(getSampleUserArgs: GetSampleUserArgs) {
    const SampleUserDocument = await this.SampleUserRepository.findOne({
      ...getSampleUserArgs
    });
    return this.toModel(SampleUserDocument);
  }

  private toModel(SampleUserDocument: SampleUserDocument) {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      _id: SampleUserDocument._id.toHexString(),
      ...SampleUserDocument
    };
  }
}
