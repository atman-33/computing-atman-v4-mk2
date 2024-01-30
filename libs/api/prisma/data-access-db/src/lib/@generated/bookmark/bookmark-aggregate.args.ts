import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkWhereInput } from './bookmark-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BookmarkOrderByWithRelationInput } from './bookmark-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookmarkCountAggregateInput } from './bookmark-count-aggregate.input';
import { BookmarkAvgAggregateInput } from './bookmark-avg-aggregate.input';
import { BookmarkSumAggregateInput } from './bookmark-sum-aggregate.input';
import { BookmarkMinAggregateInput } from './bookmark-min-aggregate.input';
import { BookmarkMaxAggregateInput } from './bookmark-max-aggregate.input';

@ArgsType()
export class BookmarkAggregateArgs {

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

    @Field(() => BookmarkCountAggregateInput, {nullable:true})
    _count?: BookmarkCountAggregateInput;

    @Field(() => BookmarkAvgAggregateInput, {nullable:true})
    _avg?: BookmarkAvgAggregateInput;

    @Field(() => BookmarkSumAggregateInput, {nullable:true})
    _sum?: BookmarkSumAggregateInput;

    @Field(() => BookmarkMinAggregateInput, {nullable:true})
    _min?: BookmarkMinAggregateInput;

    @Field(() => BookmarkMaxAggregateInput, {nullable:true})
    _max?: BookmarkMaxAggregateInput;
}
