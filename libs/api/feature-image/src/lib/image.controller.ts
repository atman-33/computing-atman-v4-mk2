import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ImageService } from './image.service';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':file')
  getImage(@Param('file') file: string, @Res() res: Response) {
    return this.imageService.getImage(file, res);
  }

  @Get(':folder/:file')
  getImageByFolder(
    @Param('folder') folder: string,
    @Param('file') file: string,
    @Res() res: Response
  ) {
    return this.imageService.getImageByFolder(folder, file, res);
  }
}
