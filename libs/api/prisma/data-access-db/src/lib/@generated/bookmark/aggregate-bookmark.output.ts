import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookmarkCountAggregate } from './bookmark-count-aggregate.output';
import { BookmarkAvgAggregate } from './bookmark-avg-aggregate.output';
import { BookmarkSumAggregate } from './bookmark-sum-aggregate.output';
import { BookmarkMinAggregate } from './bookmark-min-aggregate.output';
import { BookmarkMaxAggregate } from './bookmark-max-aggregate.output';

@ObjectType()
export class AggregateBookmark {

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
