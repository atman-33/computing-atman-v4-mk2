import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SampleTodoCountAggregate } from './sample-todo-count-aggregate.output';
import { SampleTodoMinAggregate } from './sample-todo-min-aggregate.output';
import { SampleTodoMaxAggregate } from './sample-todo-max-aggregate.output';

@ObjectType()
export class AggregateSampleTodo {

    @Field(() => SampleTodoCountAggregate, {nullable:true})
    _count?: SampleTodoCountAggregate;

    @Field(() => SampleTodoMinAggregate, {nullable:true})
    _min?: SampleTodoMinAggregate;

    @Field(() => SampleTodoMaxAggregate, {nullable:true})
    _max?: SampleTodoMaxAggregate;
}
