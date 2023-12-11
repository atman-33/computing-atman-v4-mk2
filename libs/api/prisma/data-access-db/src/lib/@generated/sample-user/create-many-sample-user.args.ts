import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleUserCreateManyInput } from './sample-user-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManySampleUserArgs {

    @Field(() => [SampleUserCreateManyInput], {nullable:false})
    @Type(() => SampleUserCreateManyInput)
    @ValidateNested()
    data!: Array<SampleUserCreateManyInput>;
}
