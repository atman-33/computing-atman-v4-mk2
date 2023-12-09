import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BytesFilter } from '../prisma/bytes-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringListFilter } from '../prisma/string-list-filter.input';

@InputType()
export class DummyWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [DummyWhereInput], {nullable:true})
    AND?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {nullable:true})
    OR?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {nullable:true})
    NOT?: Array<DummyWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    int?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    float?: FloatFilter;

    @Field(() => BytesFilter, {nullable:true})
    bytes?: BytesFilter;

    @Field(() => BigIntFilter, {nullable:true})
    bigInt?: BigIntFilter;

    @Field(() => JsonFilter, {nullable:true})
    json?: JsonFilter;

    @Field(() => StringListFilter, {nullable:true})
    friends?: StringListFilter;
}
