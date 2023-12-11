import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkWhereInput } from './bookmark-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BookmarkOrderByWithRelationInput } from './bookmark-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookmarkScalarFieldEnum } from './bookmark-scalar-field.enum';

@ArgsType()
export class FindManyBookmarkArgs {

    @Field(() => BookmarkWhereInput, {nullable:true})
    @Type(() => BookmarkWhereInput)
    @ValidateNested()
    where?: BookmarkWhereInput;

    @Field(() => [BookmarkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookmarkOrderByWithRelationInput>;

    @Field(() => BookmarkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BookmarkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookmarkScalarFieldEnum>;
}
