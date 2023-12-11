import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleUserCreateInput } from './sample-user-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneSampleUserArgs {

    @Field(() => SampleUserCreateInput, {nullable:false})
    @Type(() => SampleUserCreateInput)
    @ValidateNested()
    data!: SampleUserCreateInput;
}
