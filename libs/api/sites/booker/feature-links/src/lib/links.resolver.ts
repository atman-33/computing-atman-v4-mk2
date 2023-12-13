import { GqlAuthGuard } from '@libs/api/feature-auth';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLinkInput } from './dto/create-link-input.dto';
import { GetLinksArgs } from './dto/get-links-args.dto';
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
  createLink(@Args('createLinkInput') createLinkInput: CreateLinkInput) {
    return this.linkService.createLink(createLinkInput);
  }
}
