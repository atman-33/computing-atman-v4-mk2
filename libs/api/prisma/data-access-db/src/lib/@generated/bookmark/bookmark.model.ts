import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Link } from '../link/link.model';
import { BookmarkCount } from './bookmark-count.output';

@ObjectType()
export class Bookmark {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [Link], {nullable:true})
    links?: Array<Link>;

    @Field(() => BookmarkCount, {nullable:false})
    _count?: BookmarkCount;
}
