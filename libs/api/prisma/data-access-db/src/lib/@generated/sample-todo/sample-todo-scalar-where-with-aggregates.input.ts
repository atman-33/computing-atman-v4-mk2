import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class SampleTodoScalarWhereWithAggregatesInput {

    @Field(() => [SampleTodoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SampleTodoScalarWhereWithAggregatesInput>;

    @Field(() => [SampleTodoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SampleTodoScalarWhereWithAggregatesInput>;

    @Field(() => [SampleTodoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SampleTodoScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    editing?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    completed?: BoolWithAggregatesFilter;
}
