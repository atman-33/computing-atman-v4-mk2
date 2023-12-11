import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoWhereInput } from './sample-todo-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleTodoOrderByWithAggregationInput } from './sample-todo-order-by-with-aggregation.input';
import { SampleTodoScalarFieldEnum } from './sample-todo-scalar-field.enum';
import { SampleTodoScalarWhereWithAggregatesInput } from './sample-todo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SampleTodoCountAggregateInput } from './sample-todo-count-aggregate.input';
import { SampleTodoMinAggregateInput } from './sample-todo-min-aggregate.input';
import { SampleTodoMaxAggregateInput } from './sample-todo-max-aggregate.input';

@ArgsType()
export class SampleTodoGroupByArgs {

    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    @ValidateNested()
    where?: SampleTodoWhereInput;

    @Field(() => [SampleTodoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SampleTodoOrderByWithAggregationInput>;

    @Field(() => [SampleTodoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SampleTodoScalarFieldEnum>;

    @Field(() => SampleTodoScalarWhereWithAggregatesInput, {nullable:true})
    having?: SampleTodoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SampleTodoCountAggregateInput, {nullable:true})
    _count?: SampleTodoCountAggregateInput;

    @Field(() => SampleTodoMinAggregateInput, {nullable:true})
    _min?: SampleTodoMinAggregateInput;

    @Field(() => SampleTodoMaxAggregateInput, {nullable:true})
    _max?: SampleTodoMaxAggregateInput;
}
