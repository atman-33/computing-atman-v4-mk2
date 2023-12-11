import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleUserWhereInput } from './sample-user-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleUserOrderByWithRelationInput } from './sample-user-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SampleUserWhereUniqueInput } from './sample-user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SampleUserScalarFieldEnum } from './sample-user-scalar-field.enum';

@ArgsType()
export class FindManySampleUserArgs {

    @Field(() => SampleUserWhereInput, {nullable:true})
    @Type(() => SampleUserWhereInput)
    @ValidateNested()
    where?: SampleUserWhereInput;

    @Field(() => [SampleUserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleUserOrderByWithRelationInput>;

    @Field(() => SampleUserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleUserWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SampleUserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleUserScalarFieldEnum>;
}
