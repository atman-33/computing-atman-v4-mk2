import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkWhereInput } from './link-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteManyLinkArgs {

    @Field(() => LinkWhereInput, {nullable:true})
    @Type(() => LinkWhereInput)
    @ValidateNested()
    where?: LinkWhereInput;
}
