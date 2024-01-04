import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class LinkAvgAggregate {

    @Field(() => Float, {nullable:true})
    displayOrder?: number;
}
