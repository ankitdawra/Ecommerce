import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './services/search.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ElasticsearchModule.register({
      node: process.env.ELASTIC_HOST,
    }),
  ],
  controllers: [],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
