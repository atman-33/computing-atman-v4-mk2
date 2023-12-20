import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Bookmark } from '../bookmark/bookmark.model';

@ObjectType()
export class Link {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    siteName!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:false})
    bookmarkId!: string;

    @Field(() => Bookmark, {nullable:false})
    bookmark?: Bookmark;
}
