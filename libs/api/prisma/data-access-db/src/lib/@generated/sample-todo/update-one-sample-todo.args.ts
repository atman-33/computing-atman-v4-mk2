import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoUpdateInput } from './sample-todo-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { SampleTodoWhereUniqueInput } from './sample-todo-where-unique.input';

@ArgsType()
export class UpdateOneSampleTodoArgs {

    @Field(() => SampleTodoUpdateInput, {nullable:false})
    @Type(() => SampleTodoUpdateInput)
    @ValidateNested()
    data!: SampleTodoUpdateInput;

    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
}
