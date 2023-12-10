import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SampleTodoWhereUniqueInput } from './sample-todo-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleTodoCreateInput } from './sample-todo-create.input';
import { SampleTodoUpdateInput } from './sample-todo-update.input';

@ArgsType()
export class UpsertOneSampleTodoArgs {

    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;

    @Field(() => SampleTodoCreateInput, {nullable:false})
    @Type(() => SampleTodoCreateInput)
    create!: SampleTodoCreateInput;

    @Field(() => SampleTodoUpdateInput, {nullable:false})
    @Type(() => SampleTodoUpdateInput)
    update!: SampleTodoUpdateInput;
}
