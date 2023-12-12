import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkCreateManyInput } from './link-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyLinkArgs {

    @Field(() => [LinkCreateManyInput], {nullable:false})
    @Type(() => LinkCreateManyInput)
    @ValidateNested()
    data!: Array<LinkCreateManyInput>;
}
