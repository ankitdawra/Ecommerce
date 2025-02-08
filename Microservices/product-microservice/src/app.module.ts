import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseProvider } from './db.provider';
import { SearchModule, SearchService } from './modules';

// TODO - Add env variables
@Module({
  imports: [SearchModule],
  controllers: [AppController],
  providers: [DatabaseProvider, AppService],
})
export class AppModule {}
