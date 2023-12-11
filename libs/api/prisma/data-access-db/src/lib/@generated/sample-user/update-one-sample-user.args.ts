import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleUserUpdateInput } from './sample-user-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { SampleUserWhereUniqueInput } from './sample-user-where-unique.input';

@ArgsType()
export class UpdateOneSampleUserArgs {

    @Field(() => SampleUserUpdateInput, {nullable:false})
    @Type(() => SampleUserUpdateInput)
    @ValidateNested()
    data!: SampleUserUpdateInput;

    @Field(() => SampleUserWhereUniqueInput, {nullable:false})
    @Type(() => SampleUserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleUserWhereUniqueInput, 'id'>;
}
