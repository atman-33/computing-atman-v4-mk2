import { PrismaModule } from '@libs/api/data-access-db';
import { Module } from '@nestjs/common';
import { SampleResolver } from './sample.resolver';
import { SampleService } from './sample.service';

@Module({
  providers: [SampleResolver, SampleService],
  imports: [PrismaModule]
})
export class SampleModule {}
