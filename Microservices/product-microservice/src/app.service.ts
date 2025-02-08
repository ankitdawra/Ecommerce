import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from './db.provider';
import { SearchService } from './modules';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseProvider: DatabaseProvider,
    private searchService: SearchService,
  ) {}

  getProducts() {
    return this.databaseProvider.getCollection('products');
  }

  getProductById(id) {
    console.log('Getting product by id', id);
    return this.databaseProvider.findOne('products', {
      id: { $eq: id },
    });
  }

  getProductsById(ids) {
    console.log('Getting products by ids', ids);
    return this.databaseProvider.find('products', {
      id: {
        $in: [...ids],
      },
    });
  }

  dumpProducts(products) {
    console.log('Dumping products', products.length);
    this.searchService.indexProduct(products);
    this.databaseProvider.insertMany('products', products);
  }
}
