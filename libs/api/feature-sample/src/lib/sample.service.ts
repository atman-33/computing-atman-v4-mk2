import { PrismaService } from '@libs/api/data-access-db';
import {
  CreateOneSampleArgs,
  DeleteOneSampleArgs,
  FindUniqueSampleArgs,
  UpdateOneSampleArgs
} from '@libs/api/generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneSampleArgs: CreateOneSampleArgs) {
    return this.prisma.sample.create({
      data: createOneSampleArgs.data
    });
  }

  findAll() {
    return this.prisma.sample.findMany();
  }

  findOne(findUniqueSampleArgs: FindUniqueSampleArgs) {
    return this.prisma.sample.findUnique(findUniqueSampleArgs);
  }

  update(updateOneSampleArgs: UpdateOneSampleArgs) {
    return this.prisma.sample.update(updateOneSampleArgs);
  }

  remove(deleteOneSampleArgs: DeleteOneSampleArgs) {
    return this.prisma.sample.delete(deleteOneSampleArgs);
  }
}
