import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetSampleMongooseTableArgs } from './dto/args/get-sample-mongoose-table-args.dto';
import { CreateSampleMongooseTableInput } from './dto/input/create-sample-mongoose-table-input.dto';
import { DeleteSampleMongooseTableInput } from './dto/input/delete-sample-mongoose-table-input.dto';
import { UpdateSampleMongooseTableInput } from './dto/input/update-sample-mongoose-table-input.dto';
import { SampleMongooseTable } from './models/sample-mongoose-table.model';
import { SampleMongooseTableService } from './sample-mongoose-table.service';

@Resolver()
export class SampleMongooseTableResolver {
  constructor(private readonly SampleMongooseTableService: SampleMongooseTableService) {}

  @Mutation(() => SampleMongooseTable, { name: 'createSampleMongooseTable' })
  async createSampleMongooseTable(
    @Args('createSampleMongooseTableData')
    createSampleMongooseTableData: CreateSampleMongooseTableInput
  ) {
    return await this.SampleMongooseTableService.createSampleMongooseTable(
      createSampleMongooseTableData
    );
  }

  @Mutation(() => SampleMongooseTable, { name: 'updateSampleMongooseTable' })
  async updateSampleMongooseTable(
    @Args('updateSampleMongooseTableData')
    updateSampleMongooseTableData: UpdateSampleMongooseTableInput
  ) {
    return this.SampleMongooseTableService.updateSampleMongooseTable(updateSampleMongooseTableData);
  }

  @Mutation(() => SampleMongooseTable, { name: 'deleteSampleMongooseTable', nullable: true })
  async deleteSampleMongooseTable(
    @Args('deleteSampleMongooseTableData')
    deleteSampleMongooseTableData: DeleteSampleMongooseTableInput
  ) {
    return this.SampleMongooseTableService.deleteSampleMongooseTable(deleteSampleMongooseTableData);
  }

  @Query(() => [SampleMongooseTable], { name: 'sampleMongooseTables' })
  async getSampleMongooseTables() {
    return this.SampleMongooseTableService.getSampleMongooseTables();
  }

  @Query(() => SampleMongooseTable, { name: 'sampleMongooseTable' })
  async getSampleMongooseTable(@Args() getSampleMongooseTableArgs: GetSampleMongooseTableArgs) {
    return this.SampleMongooseTableService.getSampleMongooseTable(getSampleMongooseTableArgs);
  }
}
