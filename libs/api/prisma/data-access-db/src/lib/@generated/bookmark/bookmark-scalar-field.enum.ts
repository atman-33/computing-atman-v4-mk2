import { registerEnumType } from '@nestjs/graphql';

export enum BookmarkScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    displayOrder = "displayOrder",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BookmarkScalarFieldEnum, { name: 'BookmarkScalarFieldEnum', description: undefined })
