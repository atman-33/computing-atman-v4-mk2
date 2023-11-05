import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetSampleUserArgs } from './dto/args/get-sample-user-args.dto';
import { CreateSampleUserInput } from './dto/input/create-sample-user-input.dto';
import { DeleteSampleUserInput } from './dto/input/delete-sample-user-input.dto';
import { UpdateSampleUserInput } from './dto/input/update-sample-todo-input.dto';
import { SampleUser } from './models/sample-user.model';
import { SampleUsersService } from './sample-users.service';

@Resolver()
export class SampleUsersResolver {
  constructor(private readonly SampleUserService: SampleUsersService) {}

  @Mutation(() => SampleUser, { name: 'createSampleUser' })
  async createSampleUser(
    @Args('createSampleUserData')
    createSampleUserData: CreateSampleUserInput
  ) {
    return await this.SampleUserService.createSampleUser(createSampleUserData);
  }

  @Mutation(() => SampleUser, { name: 'updateSampleUser' })
  async updateSampleUser(
    @Args('updateSampleUserData')
    updateSampleUserData: UpdateSampleUserInput
  ) {
    return this.SampleUserService.updateSampleUser(updateSampleUserData);
  }

  @Mutation(() => SampleUser, { name: 'deleteSampleUser', nullable: true })
  async deleteSampleUser(
    @Args('deleteSampleUserData')
    deleteSampleUserData: DeleteSampleUserInput
  ) {
    return this.SampleUserService.deleteSampleUser(deleteSampleUserData);
  }

  @Query(() => [SampleUser], { name: 'sampleUsers' })
  async getSampleUsers() {
    return this.SampleUserService.getSampleUsers();
  }

  @Query(() => SampleUser, { name: 'sampleUser' })
  async getSampleUser(@Args() getSampleUserArgs: GetSampleUserArgs) {
    return this.SampleUserService.getSampleUser(getSampleUserArgs);
  }
}
