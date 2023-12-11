import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookmarkCountAggregate } from './bookmark-count-aggregate.output';
import { BookmarkMinAggregate } from './bookmark-min-aggregate.output';
import { BookmarkMaxAggregate } from './bookmark-max-aggregate.output';

@ObjectType()
export class AggregateBookmark {

    @Field(() => BookmarkCountAggregate, {nullable:true})
    _count?: BookmarkCountAggregate;

    @Field(() => BookmarkMinAggregate, {nullable:true})
    _min?: BookmarkMinAggregate;

    @Field(() => BookmarkMaxAggregate, {nullable:true})
    _max?: BookmarkMaxAggregate;
}
