import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  CreateOneSampleUserArgs,
  DeleteOneSampleUserArgs,
  FindUniqueSampleUserArgs,
  UpdateOneSampleUserArgs
} from './dto/sample-user.dto';
import { SampleUser } from './models/sample-user.model';
import { SampleUsersService } from './sample-users.service';

@Resolver(() => SampleUser)
export class SampleUsersResolver {
  constructor(private readonly sampleUsersService: SampleUsersService) {}

  @Mutation(() => SampleUser)
  async createSampleUser(
    @Args('createOneSampleUserArgs') createOneSampleUserArgs: CreateOneSampleUserArgs
  ) {
    return await this.sampleUsersService.create(createOneSampleUserArgs);
  }

  @Query(() => [SampleUser], { name: 'sampleUsers' })
  async findAll() {
    return await this.sampleUsersService.findAll();
  }

  @Query(() => SampleUser, { name: 'sampleUser' })
  async findOne(
    @Args('findUniqueSampleUserArgs') findUniqueSampleUserArgs: FindUniqueSampleUserArgs
  ) {
    return await this.sampleUsersService.findOne(findUniqueSampleUserArgs);
  }

  @Mutation(() => SampleUser)
  async updateSampleUser(
    @Args('updateOneSampleUserArgs') updateOneSampleUserArgs: UpdateOneSampleUserArgs
  ) {
    return await this.sampleUsersService.update(updateOneSampleUserArgs);
  }

  @Mutation(() => SampleUser)
  async removeSampleUser(
    @Args('deleteOneSampleUserArgs') deleteOneSampleUserArgs: DeleteOneSampleUserArgs
  ) {
    return await this.sampleUsersService.remove(deleteOneSampleUserArgs);
  }
}
