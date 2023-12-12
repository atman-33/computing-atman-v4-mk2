import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LinkWhereUniqueInput } from './link-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class FindUniqueLinkOrThrowArgs {

    @Field(() => LinkWhereUniqueInput, {nullable:false})
    @Type(() => LinkWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LinkWhereUniqueInput, 'id'>;
}
