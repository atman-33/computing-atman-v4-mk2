import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SampleUserAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    age?: true;
}
