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
    try {
      let results = await this.searchService.getRelatedProducts(id);
      if (results.length) {
        return await this.appService.getProductsById(results).toArray();
      }
      return results;
    } catch (error) {
      console.log('Error', error);
      return [];
    }
  }

  @MessagePattern({ cmd: 'getProductsByCategory' })
  async getProductsByCategory(id) {
    console.log('Getting products by', id);
    const products = await this.getProducts();
    // console.log('productsss', products);
    let random;
    if (products.length) {
      random = this.getRandomProducts(products, 8);
      console.log(random.length);
    }
    return random;
    // let results = await this.searchService.geProductsByCategory(id);
    // if (results.length) {
    //   return await this.appService.getProductsById(results).toArray();
    // }
    // return results;
  }

  private getRandomProducts(products, numberOfProducts) {
    const newArr = [];
    while (numberOfProducts > 0) {
      const randomNumber = Math.floor(Math.random() * products.length);
      if (this.checkIfProductExists(newArr, products, randomNumber)) {
        newArr.push(products[randomNumber]);
        numberOfProducts--;
      }
    }
    return newArr;
  }

  private checkIfProductExists(newArr, products, randomNumber) {
    return !newArr?.filter(({ id }) => Number(id) === products[randomNumber].id)
      .length;
  }
}
