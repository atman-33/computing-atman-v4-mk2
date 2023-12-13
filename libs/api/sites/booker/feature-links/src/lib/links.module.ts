import { PrismaModule } from '@libs/api/prisma/data-access-db';
import { Module } from '@nestjs/common';
import { LinksResolver } from './links.resolver';
import { LinksService } from './links.service';

@Module({
  providers: [LinksResolver, LinksService],
  imports: [PrismaModule]
})
export class LinksModule {}
