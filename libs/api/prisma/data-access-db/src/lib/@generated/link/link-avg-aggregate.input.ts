import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LinkAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    displayOrder?: true;
}
