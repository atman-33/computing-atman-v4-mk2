import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SampleTodoWhereUniqueInput } from './sample-todo-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class FindUniqueSampleTodoOrThrowArgs {

    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
}
