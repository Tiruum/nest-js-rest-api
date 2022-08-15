import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';

@Module({
  providers: [EntriesService],
  controllers: [EntriesController]
})
export class EntriesModule {}
