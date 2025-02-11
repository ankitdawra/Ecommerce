import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { SearchService } from './modules';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private searchService: SearchService,
  ) {}

  @Get('/')
  healthCheck() {
    return true;
  }

  @MessagePattern({ cmd: 'getProducts' })
  getProducts() {
    return this.appService.getProducts();
  }

  @MessagePattern({ cmd: 'getProductById' })
  getProductById(id) {
    const product = this.appService.getProductById(id);
    return product;
  }

  @MessagePattern({ cmd: 'dumpProducts' })
  dumpProducts(products) {
    this.appService.dumpProducts(products);
    return true;
  }

  @MessagePattern({ cmd: 'getRelatedProducts' })
  async getRelatedProducts(id) {
    let results = await this.searchService.getRelatedProducts(id);
    if (results.length) {
      return await this.appService.getProductsById(results).toArray();
    }
    return results;
  }
}
