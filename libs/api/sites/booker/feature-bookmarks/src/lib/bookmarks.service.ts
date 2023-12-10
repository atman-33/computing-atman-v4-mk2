import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import {
  CreateOneBookmarkArgs,
  DeleteOneBookmarkArgs,
  FindUniqueBookmarkArgs,
  UpdateOneBookmarkArgs
} from './dto/bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(private readonly prisma: PrismaService) {}

  async createBookmark(createOneBookmarkArgs: CreateOneBookmarkArgs, userId: string) {
    return await this.prisma.bookmark.create({
      data: {
        ...createOneBookmarkArgs.data,
        links: [],
        userId
      }
    });
  }

  async getBookmarks(userId: string) {
    return await this.prisma.bookmark.findMany({ where: { userId } });
  }

  async getBookmark(findUniqueBookmarkArgs: FindUniqueBookmarkArgs) {
    return await this.prisma.bookmark.findUnique({
      where: findUniqueBookmarkArgs.where
    });
  }

  async updateBookmark(updateOneBookmarkArgs: UpdateOneBookmarkArgs) {
    return await this.prisma.bookmark.update({
      where: updateOneBookmarkArgs.where,
      data: updateOneBookmarkArgs.data
    });
  }

  async deleteBookmark(deleteOneBookmarkArgs: DeleteOneBookmarkArgs) {
    return await this.prisma.bookmark.delete({
      where: deleteOneBookmarkArgs.where
    });
  }
}
