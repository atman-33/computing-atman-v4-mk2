import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import {
  DeleteOneBookmarkArgs,
  FindUniqueBookmarkArgs,
  UpdateOneBookmarkArgs
} from './dto/bookmark.dto';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';

@Injectable()
export class BookmarksService {
  constructor(private readonly prisma: PrismaService) {}

  async createBookmark(createBookmarkData: CreateBookmarkInput, userId: string) {
    return await this.prisma.bookmark.create({
      data: {
        ...createBookmarkData,
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
