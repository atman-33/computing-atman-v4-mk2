import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkUpdateInput } from './link-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { LinkWhereUniqueInput } from './link-where-unique.input';

@ArgsType()
export class UpdateOneLinkArgs {

    @Field(() => LinkUpdateInput, {nullable:false})
    @Type(() => LinkUpdateInput)
    @ValidateNested()
    data!: LinkUpdateInput;

    @Field(() => LinkWhereUniqueInput, {nullable:false})
    @Type(() => LinkWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LinkWhereUniqueInput, 'id'>;
}
