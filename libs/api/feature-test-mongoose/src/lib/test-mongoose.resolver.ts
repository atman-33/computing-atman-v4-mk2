import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetTestMongooseArgs } from './dto/args/get-test-mongoose-args.dto';
import { CreateTestMongooseInput } from './dto/input/create-test-mongoose-input.dto';
import { DeleteTestMongooseInput } from './dto/input/delete-test-mongoose-input.dto';
import { UpdateTestMongooseInput } from './dto/input/update-test-mongoose-input.dto';
import { TestMongoose } from './models/test-mongoose.model';
import { TestMongooseService } from './test-mongoose.service';

@Resolver()
export class TestMongooseResolver {
  constructor(private readonly testMongooseService: TestMongooseService) {}

  @Mutation(() => TestMongoose)
  async createTestMongoose(
    @Args('createTestMongooseData') createTestMongooseData: CreateTestMongooseInput
  ) {
    return await this.testMongooseService.createTestMongoose(createTestMongooseData);
  }

  @Mutation(() => TestMongoose)
  async updateTestMongoose(
    @Args('updateTestMongooseData') updateTestMongooseData: UpdateTestMongooseInput
  ) {
    return this.testMongooseService.updateTestMongoose(updateTestMongooseData);
  }

  @Mutation(() => TestMongoose, { nullable: true })
  async deleteTestMongoose(
    @Args('deleteTestMongooseArgs') deleteTestMongooseData: DeleteTestMongooseInput
  ) {
    return this.testMongooseService.deleteTestMongoose(deleteTestMongooseData);
  }

  @Query(() => [TestMongoose], { name: 'testMongooses' })
  async getTestMongooses() {
    return this.testMongooseService.getTestMongooses();
  }

  @Query(() => TestMongoose, { name: 'testMongoose' })
  async getTestMongoose(@Args() getTestMongooseArgs: GetTestMongooseArgs) {
    return this.testMongooseService.getTestMongoose(getTestMongooseArgs);
  }
}
