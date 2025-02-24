import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { products } from './dump';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  healthCheck() {
    return true;
  }

  @Get('/api/hello')
  hello() {
    return 'hello';
  }

  @Get('/api/products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('/api/product/:id')
  getProductById(@Param('id') id) {
    return this.appService.getProductById(Number(id));
  }

  @Post('/api/dumpProducts')
  dumpProducts() {
    console.log('Dumping products');
    return this.appService.dumpProducts(products);
  }

  @Get('/api/product/search/:id')
  getRelatedProducts(@Param('id') id) {
    return this.appService.getRelatedProducts(id);
  }

  @Get('/api/product/category/:id')
  getProductsByCategory(@Param('id') id) {
    return this.appService.getProductsByCategory(id);
  }
}
