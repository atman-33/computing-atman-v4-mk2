import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoWhereInput } from './sample-todo-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteManySampleTodoArgs {

    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    @ValidateNested()
    where?: SampleTodoWhereInput;
}
