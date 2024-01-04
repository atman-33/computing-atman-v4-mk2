import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookmarkSumAggregate {

    @Field(() => Int, {nullable:true})
    displayOrder?: number;
}
