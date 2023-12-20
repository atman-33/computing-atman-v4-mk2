import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkWhereInput } from './bookmark-where.input';
import { Type } from 'class-transformer';
import { BookmarkUpdateWithoutLinksInput } from './bookmark-update-without-links.input';

@InputType()
export class BookmarkUpdateToOneWithWhereWithoutLinksInput {

    @Field(() => BookmarkWhereInput, {nullable:true})
    @Type(() => BookmarkWhereInput)
    where?: BookmarkWhereInput;

    @Field(() => BookmarkUpdateWithoutLinksInput, {nullable:false})
    @Type(() => BookmarkUpdateWithoutLinksInput)
    data!: BookmarkUpdateWithoutLinksInput;
}
