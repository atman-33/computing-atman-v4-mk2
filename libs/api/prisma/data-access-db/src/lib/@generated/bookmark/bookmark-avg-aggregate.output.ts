import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookmarkAvgAggregate {

    @Field(() => Float, {nullable:true})
    displayOrder?: number;
}
