import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoCreateInput } from './sample-todo-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneSampleTodoArgs {

    @Field(() => SampleTodoCreateInput, {nullable:false})
    @Type(() => SampleTodoCreateInput)
    @ValidateNested()
    data!: SampleTodoCreateInput;
}
