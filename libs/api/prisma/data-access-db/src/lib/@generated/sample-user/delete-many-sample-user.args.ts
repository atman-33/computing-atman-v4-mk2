import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleUserWhereInput } from './sample-user-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteManySampleUserArgs {

    @Field(() => SampleUserWhereInput, {nullable:true})
    @Type(() => SampleUserWhereInput)
    @ValidateNested()
    where?: SampleUserWhereInput;
}
