import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoWhereInput } from './sample-todo-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleTodoOrderByWithRelationInput } from './sample-todo-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SampleTodoWhereUniqueInput } from './sample-todo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SampleTodoCountAggregateInput } from './sample-todo-count-aggregate.input';
import { SampleTodoMinAggregateInput } from './sample-todo-min-aggregate.input';
import { SampleTodoMaxAggregateInput } from './sample-todo-max-aggregate.input';

@ArgsType()
export class SampleTodoAggregateArgs {

    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    @ValidateNested()
    where?: SampleTodoWhereInput;

    @Field(() => [SampleTodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleTodoOrderByWithRelationInput>;

    @Field(() => SampleTodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;

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
