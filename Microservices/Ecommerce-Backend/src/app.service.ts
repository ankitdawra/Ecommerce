import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDTO } from './types/user.type';

@Injectable()
export class AppService {
  constructor(
    @Inject('PRODUCT_SERVICE') private productServiceClient: ClientProxy,
  ) {
    // private readonly authenticationClient: ClientProxy, // @Inject('AUTHENTICATION')
  }

  // userSignIn(userDTO: UserDTO) {
  //   return this.authenticationClient.send({ cmd: 'login' }, userDTO);
  // }

  // getCurrentUser() {
  //   return this.authenticationClient.send({ cmd: 'getCurrentUser' }, {});
  // }

  getProducts() {
    return this.productServiceClient.send({ cmd: 'getProducts' }, {});
  }

  getProductById(id) {
    return this.productServiceClient.send({ cmd: 'getProductById' }, id);
  }

  dumpProducts(products) {
    console.log('Service');
    return this.productServiceClient.send({ cmd: 'dumpProducts' }, products);
  }

  getRelatedProducts(id) {
    return this.productServiceClient.send({ cmd: 'getRelatedProducts' }, id);
  }

  geProductsByCategory(id) {
    return this.productServiceClient.send({ cmd: 'geProductsByCategory' }, id);
  }
}
