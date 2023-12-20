import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkCreateWithoutBookmarkInput } from './link-create-without-bookmark.input';
import { Type } from 'class-transformer';
import { LinkCreateOrConnectWithoutBookmarkInput } from './link-create-or-connect-without-bookmark.input';
import { LinkCreateManyBookmarkInputEnvelope } from './link-create-many-bookmark-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LinkWhereUniqueInput } from './link-where-unique.input';

@InputType()
export class LinkCreateNestedManyWithoutBookmarkInput {

    @Field(() => [LinkCreateWithoutBookmarkInput], {nullable:true})
    @Type(() => LinkCreateWithoutBookmarkInput)
    create?: Array<LinkCreateWithoutBookmarkInput>;

    @Field(() => [LinkCreateOrConnectWithoutBookmarkInput], {nullable:true})
    @Type(() => LinkCreateOrConnectWithoutBookmarkInput)
    connectOrCreate?: Array<LinkCreateOrConnectWithoutBookmarkInput>;

    @Field(() => LinkCreateManyBookmarkInputEnvelope, {nullable:true})
    @Type(() => LinkCreateManyBookmarkInputEnvelope)
    createMany?: LinkCreateManyBookmarkInputEnvelope;

    @Field(() => [LinkWhereUniqueInput], {nullable:true})
    @Type(() => LinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LinkWhereUniqueInput, 'id'>>;
}
