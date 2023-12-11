import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { BytesWithAggregatesFilter } from '../prisma/bytes-with-aggregates-filter.input';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { StringListFilter } from '../prisma/string-list-filter.input';

@InputType()
export class DummyScalarWhereWithAggregatesInput {

    @Field(() => [DummyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    int?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    float?: FloatWithAggregatesFilter;

    @Field(() => BytesWithAggregatesFilter, {nullable:true})
    bytes?: BytesWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    bigInt?: BigIntWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    json?: JsonWithAggregatesFilter;

    @Field(() => StringListFilter, {nullable:true})
    friends?: StringListFilter;
}
