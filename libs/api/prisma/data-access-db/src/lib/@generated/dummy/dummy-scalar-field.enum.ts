import { registerEnumType } from '@nestjs/graphql';

export enum DummyScalarFieldEnum {
    id = "id",
    date = "date",
    int = "int",
    float = "float",
    bytes = "bytes",
    bigInt = "bigInt",
    json = "json",
    friends = "friends"
}


registerEnumType(DummyScalarFieldEnum, { name: 'DummyScalarFieldEnum', description: undefined })
