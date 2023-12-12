import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkUpdateManyMutationInput } from './link-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LinkWhereInput } from './link-where.input';

@ArgsType()
export class UpdateManyLinkArgs {

    @Field(() => LinkUpdateManyMutationInput, {nullable:false})
    @Type(() => LinkUpdateManyMutationInput)
    @ValidateNested()
    data!: LinkUpdateManyMutationInput;

    @Field(() => LinkWhereInput, {nullable:true})
    @Type(() => LinkWhereInput)
    @ValidateNested()
    where?: LinkWhereInput;
}
