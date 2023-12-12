import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LinkWhereUniqueInput } from './link-where-unique.input';
import { Type } from 'class-transformer';
import { LinkUpdateWithoutBookmarkInput } from './link-update-without-bookmark.input';
import { LinkCreateWithoutBookmarkInput } from './link-create-without-bookmark.input';

@InputType()
export class LinkUpsertWithWhereUniqueWithoutBookmarkInput {

    @Field(() => LinkWhereUniqueInput, {nullable:false})
    @Type(() => LinkWhereUniqueInput)
    where!: Prisma.AtLeast<LinkWhereUniqueInput, 'id'>;

    @Field(() => LinkUpdateWithoutBookmarkInput, {nullable:false})
    @Type(() => LinkUpdateWithoutBookmarkInput)
    update!: LinkUpdateWithoutBookmarkInput;

    @Field(() => LinkCreateWithoutBookmarkInput, {nullable:false})
    @Type(() => LinkCreateWithoutBookmarkInput)
    create!: LinkCreateWithoutBookmarkInput;
}
