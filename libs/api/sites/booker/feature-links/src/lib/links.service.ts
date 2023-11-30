import { Injectable } from '@nestjs/common';
import { getLinkPreview } from 'link-preview-js';
import { GetLinksArgs } from './dto/args/get-links-args.dto';

@Injectable()
export class LinksService {
  async getLinks(getLinksArgs: GetLinksArgs) {
    const retryCount = 5;
    const retryDelay = 1000;

    const urls = getLinksArgs.urls ?? [];

    return Promise.all(
      urls.map(async (url) => {
        let retry = 0;
        let linkPreview = null;

        while (retry < retryCount) {
          try {
            linkPreview = await getLinkPreview(url);
            break;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            if (error.message !== 'Request timeout') {
              throw error;
            }

            retry++;
            if (retry >= retryCount) {
              throw error;
            }
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
          }
        }
        return linkPreview;
      })
    );
  }
}
