import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SampleTodoCountAggregate } from './sample-todo-count-aggregate.output';
import { SampleTodoMinAggregate } from './sample-todo-min-aggregate.output';
import { SampleTodoMaxAggregate } from './sample-todo-max-aggregate.output';

@ObjectType()
export class SampleTodoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Boolean, {nullable:false})
    editing!: boolean;

    @Field(() => Boolean, {nullable:false})
    completed!: boolean;

    @Field(() => SampleTodoCountAggregate, {nullable:true})
    _count?: SampleTodoCountAggregate;

    @Field(() => SampleTodoMinAggregate, {nullable:true})
    _min?: SampleTodoMinAggregate;

    @Field(() => SampleTodoMaxAggregate, {nullable:true})
    _max?: SampleTodoMaxAggregate;
}
