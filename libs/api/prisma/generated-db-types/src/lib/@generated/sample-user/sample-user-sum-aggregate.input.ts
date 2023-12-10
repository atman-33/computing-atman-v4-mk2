import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SampleUserSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    age?: true;
}
