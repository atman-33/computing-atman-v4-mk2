import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkWhereInput } from './link-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LinkOrderByWithRelationInput } from './link-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LinkWhereUniqueInput } from './link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LinkScalarFieldEnum } from './link-scalar-field.enum';

@ArgsType()
export class FindFirstLinkOrThrowArgs {

    @Field(() => LinkWhereInput, {nullable:true})
    @Type(() => LinkWhereInput)
    @ValidateNested()
    where?: LinkWhereInput;

    @Field(() => [LinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LinkOrderByWithRelationInput>;

    @Field(() => LinkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LinkWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LinkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LinkScalarFieldEnum>;
}
