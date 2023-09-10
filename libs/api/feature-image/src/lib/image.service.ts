import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'node:path';

@Injectable()
export class ImageService {
  private readonly distImagePath = 'dist/apps/api/assets';

  getImage(file: string, res: Response) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fileName, fileExtension] = file.split('.').filter(Boolean);
    const mimeType = this.getMimeType(fileExtension);

    if (!mimeType) {
      return res.status(400).send('Unsupported image format');
    }

    const image = join(process.cwd(), this.distImagePath, file);
    if (!image) {
      return res.status(404).send('Image not found');
    }

    return res.setHeader('Content-Type', mimeType).sendFile(image);
  }

  getImageByFolder(folder: string, file: string, res: Response) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fileName, fileExtension] = file.split('.').filter(Boolean);
    const mimeType = this.getMimeType(fileExtension);

    if (!mimeType) {
      return res.status(400).send('Unsupported image format');
    }

    const image = join(process.cwd(), this.distImagePath, folder, file);
    if (!image) {
      return res.status(404).send('Image not found');
    }

    return res.setHeader('Content-Type', mimeType).sendFile(image);
  }

  private getMimeType(fileExtension: string) {
    let mimeType: string;
    switch (fileExtension.toLowerCase()) {
      case 'jpg':
      case 'jpeg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      case 'gif':
        mimeType = 'image/gif';
        break;
      case 'bmp':
        mimeType = 'image/bmp';
        break;
      case 'svg':
        mimeType = 'image/svg+xml';
        break;

      default:
        mimeType = '';
    }
    return mimeType;
  }
}
