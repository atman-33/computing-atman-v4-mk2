import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringListFilter } from '../prisma/string-list-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class SampleUserScalarWhereWithAggregatesInput {

    @Field(() => [SampleUserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SampleUserScalarWhereWithAggregatesInput>;

    @Field(() => [SampleUserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SampleUserScalarWhereWithAggregatesInput>;

    @Field(() => [SampleUserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SampleUserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    age?: IntWithAggregatesFilter;

    @Field(() => StringListFilter, {nullable:true})
    hobbies?: StringListFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    premiumAccount?: BoolWithAggregatesFilter;
}
