import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SampleTodoWhereInput } from './sample-todo-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class SampleTodoWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SampleTodoWhereInput], {nullable:true})
    AND?: Array<SampleTodoWhereInput>;

    @Field(() => [SampleTodoWhereInput], {nullable:true})
    OR?: Array<SampleTodoWhereInput>;

    @Field(() => [SampleTodoWhereInput], {nullable:true})
    NOT?: Array<SampleTodoWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    editing?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;
}
