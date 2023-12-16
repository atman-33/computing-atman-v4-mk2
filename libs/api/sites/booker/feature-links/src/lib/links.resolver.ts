import { GqlAuthGuard } from '@libs/api/feature-auth';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLinkInput } from './dto/create-link-input.dto';
import { FindManyLinkArgs } from './dto/link.dto';
import { LinksService } from './links.service';
import { Link } from './models/link.model';

@Resolver(() => Link)
export class LinksResolver {
  constructor(private readonly linkService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Link], { name: 'links' })
  async getLinks(@Args() findManyLinkArgs: FindManyLinkArgs) {
    // console.log(getLinksArgs);
    return await this.linkService.getLinks(findManyLinkArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Link)
  async createLink(@Args('data') createLinkInput: CreateLinkInput) {
    return await this.linkService.createLink(createLinkInput);
  }
}
