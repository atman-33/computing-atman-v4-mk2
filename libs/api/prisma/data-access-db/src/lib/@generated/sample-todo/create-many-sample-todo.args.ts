import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoCreateManyInput } from './sample-todo-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManySampleTodoArgs {

    @Field(() => [SampleTodoCreateManyInput], {nullable:false})
    @Type(() => SampleTodoCreateManyInput)
    @ValidateNested()
    data!: Array<SampleTodoCreateManyInput>;
}
