import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './services/search.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ElasticsearchModule.register({
      node: `https://m6ppya11lz:${process.env.ELASTIC_PASS}@elastic-cluster-2572137967.us-east-1.bonsaisearch.net:443`,
    }),
  ],
  controllers: [],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
