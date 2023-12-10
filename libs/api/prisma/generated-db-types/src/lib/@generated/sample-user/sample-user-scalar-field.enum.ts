import { registerEnumType } from '@nestjs/graphql';

export enum SampleUserScalarFieldEnum {
    id = "id",
    username = "username",
    age = "age",
    hobbies = "hobbies",
    premiumAccount = "premiumAccount"
}


registerEnumType(SampleUserScalarFieldEnum, { name: 'SampleUserScalarFieldEnum', description: undefined })
