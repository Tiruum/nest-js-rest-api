import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EntriesModule } from './entries/entries.module';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [UsersModule, EntriesModule, GoogleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
