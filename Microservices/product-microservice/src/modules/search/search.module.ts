import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './services/search.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'https://m6ppya11lz:nzk04irfs0@elastic-cluster-2572137967.us-east-1.bonsaisearch.net:443',
    }),
  ],
  controllers: [],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
