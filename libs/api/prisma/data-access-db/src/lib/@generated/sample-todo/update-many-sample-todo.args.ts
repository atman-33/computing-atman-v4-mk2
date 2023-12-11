import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleTodoUpdateManyMutationInput } from './sample-todo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleTodoWhereInput } from './sample-todo-where.input';

@ArgsType()
export class UpdateManySampleTodoArgs {

    @Field(() => SampleTodoUpdateManyMutationInput, {nullable:false})
    @Type(() => SampleTodoUpdateManyMutationInput)
    @ValidateNested()
    data!: SampleTodoUpdateManyMutationInput;

    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    @ValidateNested()
    where?: SampleTodoWhereInput;
}
