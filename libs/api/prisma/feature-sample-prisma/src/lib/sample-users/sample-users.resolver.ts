import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateSampleUserInput } from './dto/create-sample-user-input.dto';
import { DeleteSampleUserInput } from './dto/delete-sample-user-input.dto';
import { GetSampleUserArgs } from './dto/get-sample-user-args.dto';
import { UpdateSampleUserInput } from './dto/update-sample-user-input.dto';
import { SampleUser } from './models/sample-user.model';
import { SampleUsersService } from './sample-users.service';

@Resolver(() => SampleUser)
export class SampleUsersResolver {
  constructor(private readonly sampleUsersService: SampleUsersService) {}

  @Query(() => [SampleUser], { name: 'sampleUsers' })
  async getSampleUsers() {
    return await this.sampleUsersService.getSampleUsers();
  }

  @Query(() => SampleUser, { name: 'sampleUser' })
  async getSampleUser(@Args() getSampleUserArgs: GetSampleUserArgs) {
    return await this.sampleUsersService.getSampleUser(getSampleUserArgs);
  }

  @Mutation(() => SampleUser)
  async createSampleUser(@Args() createSampleUserData: CreateSampleUserInput) {
    return await this.sampleUsersService.createSampleUser(createSampleUserData);
  }

  @Mutation(() => SampleUser)
  async updateSampleUser(@Args() updateSampleUserData: UpdateSampleUserInput) {
    return await this.sampleUsersService.updateSampleUser(updateSampleUserData);
  }

  @Mutation(() => SampleUser, { name: 'deleteSampleUser' })
  async deleteSampleUser(@Args() deleteSampleUserData: DeleteSampleUserInput) {
    return await this.sampleUsersService.deleteSampleUser(deleteSampleUserData);
  }
}
