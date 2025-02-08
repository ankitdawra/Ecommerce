import { RequestParams } from '@elastic/elasticsearch';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  private index = 'products';
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async existsIndex() {
    const request: RequestParams.IndicesExists = {
      index: this.index,
    };
    return this.elasticsearchService.indices.exists(request);
  }

  async createIndex() {
    const request: RequestParams.IndicesCreate = {
      body: {
        settings: {
          index: {
            number_of_shards: 1,
            number_of_replicas: 1,
          },
        },
      },
      index: this.index,
    };
    return this.elasticsearchService.indices.create(request);
  }

  async indexProduct(products) {
    const exist = await this.existsIndex();
    if (!exist.body) {
      await this.createIndex();
    }
    const body = products.flatMap((product) => {
      const doc: any = {
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
      };
      return [{ index: { _index: this.index } }, doc];
    });
    const request: RequestParams.Bulk = {
      refresh: true,
      body,
    };
    return this.elasticsearchService.bulk(request);
  }

  async getRelatedProducts(query) {
    const results = await this.elasticsearchService.search({
      index: this.index,
      body: {
        query: {
          multi_match: {
            query,
            fields: ['title', 'description', 'category'],
            fuzziness: 'AUTO',
          },
        },
      },
    });
    if (results.body.hits.total.value) {
      return results.body.hits.hits.map((hit) => hit._source.id);
    }
    return [];
  }
}
