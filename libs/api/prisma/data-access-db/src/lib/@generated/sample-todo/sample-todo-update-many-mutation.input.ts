import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SampleTodoUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    editing?: boolean;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
}
