import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkWhereInput } from './bookmark-where.input';

@InputType()
export class BookmarkRelationFilter {

    @Field(() => BookmarkWhereInput, {nullable:true})
    is?: BookmarkWhereInput;

    @Field(() => BookmarkWhereInput, {nullable:true})
    isNot?: BookmarkWhereInput;
}
