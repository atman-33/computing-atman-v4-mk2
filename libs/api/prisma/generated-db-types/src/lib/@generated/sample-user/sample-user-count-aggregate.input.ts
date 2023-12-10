import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SampleUserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    age?: true;

    @Field(() => Boolean, {nullable:true})
    hobbies?: true;

    @Field(() => Boolean, {nullable:true})
    premiumAccount?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
