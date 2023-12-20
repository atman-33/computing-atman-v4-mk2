import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LinkWhereUniqueInput } from './link-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LinkCreateInput } from './link-create.input';
import { LinkUpdateInput } from './link-update.input';

@ArgsType()
export class UpsertOneLinkArgs {

    @Field(() => LinkWhereUniqueInput, {nullable:false})
    @Type(() => LinkWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LinkWhereUniqueInput, 'id'>;

    @Field(() => LinkCreateInput, {nullable:false})
    @Type(() => LinkCreateInput)
    create!: LinkCreateInput;

    @Field(() => LinkUpdateInput, {nullable:false})
    @Type(() => LinkUpdateInput)
    update!: LinkUpdateInput;
}
