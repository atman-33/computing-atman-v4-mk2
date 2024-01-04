import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookmarkAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    displayOrder?: true;
}
