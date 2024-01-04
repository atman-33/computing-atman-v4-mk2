import { registerEnumType } from '@nestjs/graphql';

export enum LinkScalarFieldEnum {
    id = "id",
    url = "url",
    title = "title",
    siteName = "siteName",
    description = "description",
    image = "image",
    displayOrder = "displayOrder",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    bookmarkId = "bookmarkId"
}


registerEnumType(LinkScalarFieldEnum, { name: 'LinkScalarFieldEnum', description: undefined })
