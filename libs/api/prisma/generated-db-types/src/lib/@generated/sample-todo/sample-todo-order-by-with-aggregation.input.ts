import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SampleTodoCountOrderByAggregateInput } from './sample-todo-count-order-by-aggregate.input';
import { SampleTodoMaxOrderByAggregateInput } from './sample-todo-max-order-by-aggregate.input';
import { SampleTodoMinOrderByAggregateInput } from './sample-todo-min-order-by-aggregate.input';

@InputType()
export class SampleTodoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    editing?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;

    @Field(() => SampleTodoCountOrderByAggregateInput, {nullable:true})
    _count?: SampleTodoCountOrderByAggregateInput;

    @Field(() => SampleTodoMaxOrderByAggregateInput, {nullable:true})
    _max?: SampleTodoMaxOrderByAggregateInput;

    @Field(() => SampleTodoMinOrderByAggregateInput, {nullable:true})
    _min?: SampleTodoMinOrderByAggregateInput;
}
