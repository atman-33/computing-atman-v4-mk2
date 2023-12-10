import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SampleUserWhereUniqueInput } from './sample-user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteOneSampleUserArgs {

    @Field(() => SampleUserWhereUniqueInput, {nullable:false})
    @Type(() => SampleUserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleUserWhereUniqueInput, 'id'>;
}
