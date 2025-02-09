import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseProvider } from './db.provider';
import { SearchModule } from './modules';

@Module({
  imports: [SearchModule],
  controllers: [AppController],
  providers: [DatabaseProvider, AppService],
})
export class AppModule {}
