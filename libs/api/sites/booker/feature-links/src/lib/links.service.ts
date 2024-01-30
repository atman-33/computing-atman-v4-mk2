import { Link, PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { getLinkPreview } from 'link-preview-js';
import { CreateLinkInput } from './dto/create-link-input.dto';
import { DeleteLinkInput } from './dto/delete-link-input.dto';
import { GetLinksArgs } from './dto/get-links-args.dto';
import { UpdateLinkInput } from './dto/update-link-input.dto';

type LinkPreview = {
  title?: string;
  siteName?: string;
  description?: string;
  images?: string[];
};

const include: Prisma.LinkInclude = {
  bookmark: true
};

@Injectable()
export class LinksService {
  private readonly retryCount = 5;
  private readonly retryDelay = 1000;

  constructor(private readonly prisma: PrismaService) {}

  async createLink(createLinkData: CreateLinkInput): Promise<Link> {
    const linkPreview = await this.getLinkPreview(createLinkData.url);
    return await this.prisma.link.create({
      data: {
        ...createLinkData,
        title: linkPreview.title,
        siteName: linkPreview.siteName,
        description: linkPreview.description,
        image: linkPreview.images !== undefined ? linkPreview.images[0] : undefined
      }
    });
  }

  async getLinks(getLinksArgs: GetLinksArgs) {
    return await this.prisma.link.findMany({
      where: getLinksArgs.where,
      include: include
    });
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

  async deleteLink(deleteLinkData: DeleteLinkInput) {
    return await this.prisma.link.delete({
      where: deleteLinkData.where
    });
  }

  async updateLink(updateLinkData: UpdateLinkInput) {
    const { id, url, title, siteName, description, image, bookmarkId } = updateLinkData;
    const maxDisplayOrderLink = await this.prisma.link.findMany({
      where: { bookmarkId: bookmarkId },
      orderBy: { displayOrder: 'desc' },
      take: 1
    });

    // console.log(maxDisplayOrderLink);
    const maxDisplayOrder =
      maxDisplayOrderLink.length > 0 ? maxDisplayOrderLink[0].displayOrder : 0;

    return await this.prisma.link.update({
      where: { id: id },
      data: {
        url: url,
        title: title,
        siteName: siteName,
        description: description,
        image: image,
        bookmarkId: bookmarkId,
        displayOrder: maxDisplayOrder !== null ? maxDisplayOrder + 1 : 1
      }
    });
  }
}
