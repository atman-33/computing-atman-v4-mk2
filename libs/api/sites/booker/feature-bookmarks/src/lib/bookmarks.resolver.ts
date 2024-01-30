import { CurrentUser, GqlAuthGuard, User } from '@libs/api/feature-auth';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';
import { DeleteBookmarkInput } from './dto/delete-bookmark-input.dto';
import { GetBookmarkArgs } from './dto/get-bookmark-args.dto';
import { UpdateBookmarkInput } from './dto/update-bookmark-input.dto';
import { Bookmark } from './models/bookmark.model';

@Resolver(() => Bookmark)
export class BookmarksResolver {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async createBookmark(
    @Args('data') createBookmarkData: CreateBookmarkInput,
    @CurrentUser() user: User
  ) {
    return await this.bookmarksService.createBookmark(createBookmarkData, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Bookmark], { name: 'bookmarks' })
  async getBookmarks(@CurrentUser() user: User) {
    return await this.bookmarksService.getBookmarks(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Bookmark, { name: 'bookmark' })
  async getBookmark(@Args() getBookmarkArgs: GetBookmarkArgs) {
    return await this.bookmarksService.getBookmark(getBookmarkArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async updateBookmark(@Args('data') updateBookmarkData: UpdateBookmarkInput) {
    return await this.bookmarksService.updateBookmark(updateBookmarkData);
  }

  /**
   * Delete Bookmark ({nullable: true} is used to return null if the bookmark is not found!)
   * @param deleteBookmarkData
   * @param user
   * @returns
   */
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark, { nullable: true })
  async deleteBookmark(@Args() deleteOneBookmarkData: DeleteBookmarkInput) {
    return await this.bookmarksService.deleteBookmark(deleteOneBookmarkData);
  }
}
