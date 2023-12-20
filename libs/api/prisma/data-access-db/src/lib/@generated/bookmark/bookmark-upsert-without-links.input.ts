import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkUpdateWithoutLinksInput } from './bookmark-update-without-links.input';
import { Type } from 'class-transformer';
import { BookmarkCreateWithoutLinksInput } from './bookmark-create-without-links.input';
import { BookmarkWhereInput } from './bookmark-where.input';

@InputType()
export class BookmarkUpsertWithoutLinksInput {

    @Field(() => BookmarkUpdateWithoutLinksInput, {nullable:false})
    @Type(() => BookmarkUpdateWithoutLinksInput)
    update!: BookmarkUpdateWithoutLinksInput;

    @Field(() => BookmarkCreateWithoutLinksInput, {nullable:false})
    @Type(() => BookmarkCreateWithoutLinksInput)
    create!: BookmarkCreateWithoutLinksInput;

    @Field(() => BookmarkWhereInput, {nullable:true})
    @Type(() => BookmarkWhereInput)
    where?: BookmarkWhereInput;
}
