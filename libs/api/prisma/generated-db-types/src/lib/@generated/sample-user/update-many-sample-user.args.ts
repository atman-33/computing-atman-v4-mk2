import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleUserUpdateManyMutationInput } from './sample-user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleUserWhereInput } from './sample-user-where.input';

@ArgsType()
export class UpdateManySampleUserArgs {

    @Field(() => SampleUserUpdateManyMutationInput, {nullable:false})
    @Type(() => SampleUserUpdateManyMutationInput)
    @ValidateNested()
    data!: SampleUserUpdateManyMutationInput;

    @Field(() => SampleUserWhereInput, {nullable:true})
    @Type(() => SampleUserWhereInput)
    @ValidateNested()
    where?: SampleUserWhereInput;
}
