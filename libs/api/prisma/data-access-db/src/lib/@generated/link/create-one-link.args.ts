import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkCreateInput } from './link-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneLinkArgs {

    @Field(() => LinkCreateInput, {nullable:false})
    @Type(() => LinkCreateInput)
    @ValidateNested()
    data!: LinkCreateInput;
}
