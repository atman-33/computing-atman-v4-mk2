import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import {
  CreateOneSampleUserArgs,
  DeleteOneSampleUserArgs,
  FindUniqueSampleUserArgs,
  UpdateOneSampleUserArgs
} from './dto/sample-user.dto';

@Injectable()
export class SampleUsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOneSampleUserArgs: CreateOneSampleUserArgs) {
    return await this.prisma.sampleUser.create({ data: createOneSampleUserArgs.data });
  }
  async findAll() {
    return await this.prisma.sampleUser.findMany();
  }
  async findOne(findUniqueSampleUserArgs: FindUniqueSampleUserArgs) {
    return await this.prisma.sampleUser.findUnique({ where: findUniqueSampleUserArgs.where });
  }
  async update(updateOneSampleUserArgs: UpdateOneSampleUserArgs) {
    return await this.prisma.sampleUser.update({
      where: updateOneSampleUserArgs.where,
      data: updateOneSampleUserArgs.data
    });
  }
  async remove(deleteOneSampleUserArgs: DeleteOneSampleUserArgs) {
    return await this.prisma.sampleUser.delete({
      where: deleteOneSampleUserArgs.where
    });
  }
}
