import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { LinkCountAggregate } from './link-count-aggregate.output';
import { LinkAvgAggregate } from './link-avg-aggregate.output';
import { LinkSumAggregate } from './link-sum-aggregate.output';
import { LinkMinAggregate } from './link-min-aggregate.output';
import { LinkMaxAggregate } from './link-max-aggregate.output';

@ObjectType()
export class LinkGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    url!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    siteName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;

    @Field(() => Int, {nullable:true})
    displayOrder?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    bookmarkId!: string;

    @Field(() => LinkCountAggregate, {nullable:true})
    _count?: LinkCountAggregate;

    @Field(() => LinkAvgAggregate, {nullable:true})
    _avg?: LinkAvgAggregate;

    @Field(() => LinkSumAggregate, {nullable:true})
    _sum?: LinkSumAggregate;

    @Field(() => LinkMinAggregate, {nullable:true})
    _min?: LinkMinAggregate;

    @Field(() => LinkMaxAggregate, {nullable:true})
    _max?: LinkMaxAggregate;
}
