import {
  CreateOneSampleArgs,
  DeleteOneSampleArgs,
  FindUniqueSampleArgs,
  Sample,
  UpdateOneSampleArgs
} from '@libs/api/generated-db-types';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SampleService } from './sample.service';

@Resolver(() => Sample)
export class SampleResolver {
  constructor(private readonly sampleService: SampleService) {}

  @Mutation(() => Sample)
  createSample(@Args() createOneSampleArgs: CreateOneSampleArgs) {
    return this.sampleService.create(createOneSampleArgs);
  }

  @Query(() => [Sample], { name: 'samples' })
  findAll() {
    return this.sampleService.findAll();
  }

  @Query(() => Sample, { name: 'sample' })
  findOne(@Args() findUniqueSampleArgs: FindUniqueSampleArgs) {
    return this.sampleService.findOne(findUniqueSampleArgs);
  }

  @Mutation(() => Sample)
  updateSample(@Args() updateOneSampleArgs: UpdateOneSampleArgs) {
    return this.sampleService.update(updateOneSampleArgs);
  }

  @Mutation(() => Sample)
  removeSample(@Args() deleteOneSampleArgs: DeleteOneSampleArgs) {
    return this.sampleService.remove(deleteOneSampleArgs);
  }
}
