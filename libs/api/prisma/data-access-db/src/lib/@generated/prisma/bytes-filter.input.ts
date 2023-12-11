import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BytesFilter {

    @Field(() => String, {nullable:true})
    equals?: Buffer;

    @Field(() => [String], {nullable:true})
    in?: Array<Buffer>;

    @Field(() => [String], {nullable:true})
    notIn?: Array<Buffer>;

    @Field(() => BytesFilter, {nullable:true})
    not?: BytesFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
