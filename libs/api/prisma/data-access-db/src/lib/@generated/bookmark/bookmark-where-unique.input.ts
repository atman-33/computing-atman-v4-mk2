import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkWhereInput } from './bookmark-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringListFilter } from '../prisma/string-list-filter.input';

@InputType()
export class BookmarkWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [BookmarkWhereInput], {nullable:true})
    AND?: Array<BookmarkWhereInput>;

    @Field(() => [BookmarkWhereInput], {nullable:true})
    OR?: Array<BookmarkWhereInput>;

    @Field(() => [BookmarkWhereInput], {nullable:true})
    NOT?: Array<BookmarkWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringListFilter, {nullable:true})
    links?: StringListFilter;
}
