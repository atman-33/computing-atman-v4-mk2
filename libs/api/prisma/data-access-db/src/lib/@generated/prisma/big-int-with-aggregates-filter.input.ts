import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from './int-filter.input';
import { FloatFilter } from './float-filter.input';
import { BigIntFilter } from './big-int-filter.input';

@InputType()
export class BigIntWithAggregatesFilter {

    @Field(() => String, {nullable:true})
    equals?: bigint | number;

    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;

    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;

    @Field(() => String, {nullable:true})
    lt?: bigint | number;

    @Field(() => String, {nullable:true})
    lte?: bigint | number;

    @Field(() => String, {nullable:true})
    gt?: bigint | number;

    @Field(() => String, {nullable:true})
    gte?: bigint | number;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    not?: BigIntWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    _avg?: FloatFilter;

    @Field(() => BigIntFilter, {nullable:true})
    _sum?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    _min?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    _max?: BigIntFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
