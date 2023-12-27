import { GqlAuthGuard } from '@libs/api/feature-auth';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLinkInput } from './dto/create-link-input.dto';
import { DeleteLinkInput } from './dto/delete-link-input.dto';
import { GetLinksArgs } from './dto/get-links-args.dto';
import { UpdateLinkInput } from './dto/update-link-input.dto';
import { LinksService } from './links.service';
import { Link } from './models/link.model';

@Resolver(() => Link)
export class LinksResolver {
  constructor(private readonly linkService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Link], { name: 'links' })
  async getLinks(@Args() getLinksArgs: GetLinksArgs) {
    // console.log(getLinksArgs);
    return await this.linkService.getLinks(getLinksArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Link)
  async createLink(@Args('data') createLinkData: CreateLinkInput) {
    return await this.linkService.createLink(createLinkData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Link)
  async deleteLink(@Args() deleteLinkData: DeleteLinkInput) {
    return await this.linkService.deleteLink(deleteLinkData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Link)
  async updateLink(@Args('data') updateLinkData: UpdateLinkInput) {
    return await this.linkService.updateLink(updateLinkData);
  }
}
