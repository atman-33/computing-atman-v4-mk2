import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SampleTodoCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    content!: number;

    @Field(() => Int, {nullable:false})
    editing!: number;

    @Field(() => Int, {nullable:false})
    completed!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
