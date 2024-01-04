import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { BookmarkCountAggregate } from './bookmark-count-aggregate.output';
import { BookmarkAvgAggregate } from './bookmark-avg-aggregate.output';
import { BookmarkSumAggregate } from './bookmark-sum-aggregate.output';
import { BookmarkMinAggregate } from './bookmark-min-aggregate.output';
import { BookmarkMaxAggregate } from './bookmark-max-aggregate.output';

@ObjectType()
export class BookmarkGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;

    @Field(() => Int, {nullable:true})
    displayOrder?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BookmarkCountAggregate, {nullable:true})
    _count?: BookmarkCountAggregate;

    @Field(() => BookmarkAvgAggregate, {nullable:true})
    _avg?: BookmarkAvgAggregate;

    @Field(() => BookmarkSumAggregate, {nullable:true})
    _sum?: BookmarkSumAggregate;

    @Field(() => BookmarkMinAggregate, {nullable:true})
    _min?: BookmarkMinAggregate;

    @Field(() => BookmarkMaxAggregate, {nullable:true})
    _max?: BookmarkMaxAggregate;
}
