import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFilter } from './int-filter.input';
import { JsonFilter } from './json-filter.input';

@InputType()
export class JsonWithAggregatesFilter {

    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    _min?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    _max?: JsonFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
