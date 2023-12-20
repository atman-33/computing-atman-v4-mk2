import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { BookmarkCountAggregate } from './bookmark-count-aggregate.output';
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

    @Field(() => BookmarkCountAggregate, {nullable:true})
    _count?: BookmarkCountAggregate;

    @Field(() => BookmarkMinAggregate, {nullable:true})
    _min?: BookmarkMinAggregate;

    @Field(() => BookmarkMaxAggregate, {nullable:true})
    _max?: BookmarkMaxAggregate;
}
