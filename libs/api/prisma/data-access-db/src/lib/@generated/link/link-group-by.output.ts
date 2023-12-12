import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { LinkCountAggregate } from './link-count-aggregate.output';
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

    @Field(() => String, {nullable:false})
    bookmarkId!: string;

    @Field(() => LinkCountAggregate, {nullable:true})
    _count?: LinkCountAggregate;

    @Field(() => LinkMinAggregate, {nullable:true})
    _min?: LinkMinAggregate;

    @Field(() => LinkMaxAggregate, {nullable:true})
    _max?: LinkMaxAggregate;
}
