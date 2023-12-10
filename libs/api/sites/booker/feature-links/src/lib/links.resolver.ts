import { GqlAuthGuard } from '@libs/api/feature-auth';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetLinksArgs } from './dto/args/get-links-args.dto';
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
}
