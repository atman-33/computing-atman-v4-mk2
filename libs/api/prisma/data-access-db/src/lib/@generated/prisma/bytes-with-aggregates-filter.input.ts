import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from './int-filter.input';
import { BytesFilter } from './bytes-filter.input';

@InputType()
export class BytesWithAggregatesFilter {

    @Field(() => String, {nullable:true})
    equals?: Buffer;

    @Field(() => [String], {nullable:true})
    in?: Array<Buffer>;

    @Field(() => [String], {nullable:true})
    notIn?: Array<Buffer>;

    @Field(() => BytesWithAggregatesFilter, {nullable:true})
    not?: BytesWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => BytesFilter, {nullable:true})
    _min?: BytesFilter;

    @Field(() => BytesFilter, {nullable:true})
    _max?: BytesFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
