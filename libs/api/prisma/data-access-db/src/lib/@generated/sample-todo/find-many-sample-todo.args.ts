import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoWhereInput } from './sample-todo-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleTodoOrderByWithRelationInput } from './sample-todo-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SampleTodoWhereUniqueInput } from './sample-todo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SampleTodoScalarFieldEnum } from './sample-todo-scalar-field.enum';

@ArgsType()
export class FindManySampleTodoArgs {

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

    @Field(() => [SampleTodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleTodoScalarFieldEnum>;
}
