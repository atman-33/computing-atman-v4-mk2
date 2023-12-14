import { FindManyLinkArgs, Link, PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import { getLinkPreview } from 'link-preview-js';
import { CreateLinkInput } from './dto/create-link-input.dto';

type LinkPreview = {
  title?: string;
  siteName?: string;
  description?: string;
  images?: string[];
};

@Injectable()
export class LinksService {
  private readonly retryCount = 5;
  private readonly retryDelay = 1000;

  constructor(private readonly prisma: PrismaService) {}

  async createLink(createLinkInput: CreateLinkInput): Promise<Link> {
    const linkPreview = await this.getLinkPreview(createLinkInput.url);
    return await this.prisma.link.create({
      data: {
        ...createLinkInput,
        title: linkPreview.title,
        siteName: linkPreview.siteName,
        description: linkPreview.description,
        image: linkPreview.images !== undefined ? linkPreview.images[0] : undefined
      }
    });
  }

  async getLinks(findManyLinkArgs: FindManyLinkArgs) {
    return await this.prisma.link.findMany(findManyLinkArgs);
  }

  async getLinkPreview(url: string): Promise<LinkPreview> {
    let retry = 0;
    let linkPreview = null;

    while (retry < this.retryCount) {
      try {
        linkPreview = await getLinkPreview(url, {
          timeout: 1000,
          headers: {
            'User-Agent': 'googolebot'
          }
        }); // for debug => .then((res) => console.log(res));
        break;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.message !== 'Request timeout') {
          throw error;
        }

        retry++;
        if (retry >= this.retryCount) {
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, this.retryDelay));
      }
    }
    return linkPreview as unknown as LinkPreview;
  }

  async getLinkPreviews(urls: string[]): Promise<LinkPreview[]> {
    return Promise.all(
      urls.map(async (url) => {
        const linkPreview = await this.getLinkPreview(url);
        return {
          ...linkPreview
        };
      })
    );
  }
}
