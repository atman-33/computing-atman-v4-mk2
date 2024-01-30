import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import { CreateSampleUserInput } from './dto/create-sample-user-input.dto';
import { DeleteSampleUserInput } from './dto/delete-sample-user-input.dto';
import { GetSampleUserArgs } from './dto/get-sample-user-args.dto';
import { UpdateSampleUserInput } from './dto/update-sample-user-input.dto';

@Injectable()
export class SampleUsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getSampleUsers() {
    return await this.prisma.sampleUser.findMany();
  }

  async getSampleUser(getSampleUserArgs: GetSampleUserArgs) {
    return await this.prisma.sampleUser.findUnique({ where: getSampleUserArgs.where });
  }

  async createSampleUser(createSampleUserData: CreateSampleUserInput) {
    return await this.prisma.sampleUser.create({ data: createSampleUserData.data });
  }

  async updateSampleUser(updateSampleUserData: UpdateSampleUserInput) {
    return await this.prisma.sampleUser.update({
      where: updateSampleUserData.where,
      data: updateSampleUserData.data
    });
  }

  async deleteSampleUser(deleteSampleUserData: DeleteSampleUserInput) {
    return await this.prisma.sampleUser.delete({
      where: deleteSampleUserData.where
    });
  }
}
