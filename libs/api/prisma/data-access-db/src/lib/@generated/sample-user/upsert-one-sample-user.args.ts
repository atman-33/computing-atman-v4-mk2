import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SampleUserWhereUniqueInput } from './sample-user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleUserCreateInput } from './sample-user-create.input';
import { SampleUserUpdateInput } from './sample-user-update.input';

@ArgsType()
export class UpsertOneSampleUserArgs {

    @Field(() => SampleUserWhereUniqueInput, {nullable:false})
    @Type(() => SampleUserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleUserWhereUniqueInput, 'id'>;

    @Field(() => SampleUserCreateInput, {nullable:false})
    @Type(() => SampleUserCreateInput)
    create!: SampleUserCreateInput;

    @Field(() => SampleUserUpdateInput, {nullable:false})
    @Type(() => SampleUserUpdateInput)
    update!: SampleUserUpdateInput;
}
