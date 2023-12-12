import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkCreateWithoutBookmarkInput } from './link-create-without-bookmark.input';
import { Type } from 'class-transformer';
import { LinkCreateOrConnectWithoutBookmarkInput } from './link-create-or-connect-without-bookmark.input';
import { LinkUpsertWithWhereUniqueWithoutBookmarkInput } from './link-upsert-with-where-unique-without-bookmark.input';
import { LinkCreateManyBookmarkInputEnvelope } from './link-create-many-bookmark-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LinkWhereUniqueInput } from './link-where-unique.input';
import { LinkUpdateWithWhereUniqueWithoutBookmarkInput } from './link-update-with-where-unique-without-bookmark.input';
import { LinkUpdateManyWithWhereWithoutBookmarkInput } from './link-update-many-with-where-without-bookmark.input';
import { LinkScalarWhereInput } from './link-scalar-where.input';

@InputType()
export class LinkUncheckedUpdateManyWithoutBookmarkNestedInput {

    @Field(() => [LinkCreateWithoutBookmarkInput], {nullable:true})
    @Type(() => LinkCreateWithoutBookmarkInput)
    create?: Array<LinkCreateWithoutBookmarkInput>;

    @Field(() => [LinkCreateOrConnectWithoutBookmarkInput], {nullable:true})
    @Type(() => LinkCreateOrConnectWithoutBookmarkInput)
    connectOrCreate?: Array<LinkCreateOrConnectWithoutBookmarkInput>;

    @Field(() => [LinkUpsertWithWhereUniqueWithoutBookmarkInput], {nullable:true})
    @Type(() => LinkUpsertWithWhereUniqueWithoutBookmarkInput)
    upsert?: Array<LinkUpsertWithWhereUniqueWithoutBookmarkInput>;

    @Field(() => LinkCreateManyBookmarkInputEnvelope, {nullable:true})
    @Type(() => LinkCreateManyBookmarkInputEnvelope)
    createMany?: LinkCreateManyBookmarkInputEnvelope;

    @Field(() => [LinkWhereUniqueInput], {nullable:true})
    @Type(() => LinkWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LinkWhereUniqueInput, 'id'>>;

    @Field(() => [LinkWhereUniqueInput], {nullable:true})
    @Type(() => LinkWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LinkWhereUniqueInput, 'id'>>;

    @Field(() => [LinkWhereUniqueInput], {nullable:true})
    @Type(() => LinkWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LinkWhereUniqueInput, 'id'>>;

    @Field(() => [LinkWhereUniqueInput], {nullable:true})
    @Type(() => LinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LinkWhereUniqueInput, 'id'>>;

    @Field(() => [LinkUpdateWithWhereUniqueWithoutBookmarkInput], {nullable:true})
    @Type(() => LinkUpdateWithWhereUniqueWithoutBookmarkInput)
    update?: Array<LinkUpdateWithWhereUniqueWithoutBookmarkInput>;

    @Field(() => [LinkUpdateManyWithWhereWithoutBookmarkInput], {nullable:true})
    @Type(() => LinkUpdateManyWithWhereWithoutBookmarkInput)
    updateMany?: Array<LinkUpdateManyWithWhereWithoutBookmarkInput>;

    @Field(() => [LinkScalarWhereInput], {nullable:true})
    @Type(() => LinkScalarWhereInput)
    deleteMany?: Array<LinkScalarWhereInput>;
}
